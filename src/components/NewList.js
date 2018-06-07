import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {startAddList} from '../actions/lists';
import {setName} from  '../actions/createlist';
import moment from 'moment';

export class NewList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            name: this.props.list_name,
            current_route: this.props.route
        };
    }

    addCurrentList = () => {
        const created = moment().format('MMMM Do YYYY, h:mm:ss a');
        const list = {...this.props.current_list, creator: this.props.user, created }
        this.props.addList(list);
        this.props.history.push('/dashboard');
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.props.setName(name);
        this.setState({name});
    };

    nextStep = () => {
        const stepNum = this.state.step;
        this.setState({step: stepNum + 1});
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <h1>Enter Job Information: </h1>
                            <div className="input-field col s12">
                                <input 
                                    id="last_name" 
                                    type="text" 
                                    className="validate"
                                    placeholder="Builder/ Customer Info"                                     
                                    value={this.state.name}
                                    onChange={this.onNameChange}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                {
                    (this.props.current_list.name) && (
                        <div className="row">
                            <h1>Find List Items: </h1>
                            {
                                this.props.items.map((item, index) => (
                                    <div className="col s6 m3 list-button" key={index}>
                                        <Link to={`${this.state.current_route}/${item}`}>
                                            <h2>{item.replace("-",".").toUpperCase()}</h2>
                                        </Link>
                                    </div>
                                ))  
                            }
                        </div>
                    )
                }
                <div className="row">
                    {           
                        (this.props.current_list.items.length > 0) &&
                            (
                                <div>
                                    <h1>Save List</h1>
                                    <a onClick={() => this.addCurrentList()} className="waves-effect waves-light btn">Save List</a>
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    addList: (list) => dispatch(startAddList(list)),
    setName: (name) => dispatch(setName(name))
});

const mapStateToProps = (state, props) => {

    let items = [];
    let route = "";
    let current_list = state.createlist;
    let list_name = state.createlist.name;
    
    const array = Object.values(props.match.params);

    switch(array.length) {
        case 0:
            items = state.inventory;
            route = "/new";
            break;
        case 1:
            items = state.inventory[array[0]];
            route = "/new/" + array[0];
            console.log('im here');
            break;
        case 2:
            items = state.inventory[array[0]][array[1]];
            route = "/new/" + array[0] + "/" + array[1];
            break;
        case 3:
            items = state.inventory[array[0]][array[1]][array[2]];
            route = "/new/" + array[0] + "/" + array[1] + "/" + array[2];
            break;
        default: break;     
    }

    items = Object.keys(items);

    return { items, route, current_list, list_name, user: state.auth.email }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewList);