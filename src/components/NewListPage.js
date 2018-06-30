import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { startAddList } from '../actions/lists';
import { setName } from  '../actions/createlist';
import KeyFinder from './KeyFinder';

export class NewListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list_saved: (this.props.listName) ? true : false,
            name: this.props.listName,
        };
    };

    addCurrentList = () => {
        const created = moment().unix() * 1000; //Converting to milliseconds
        const list = {...this.props.list, creator: this.props.user, created }
        this.props.addList(list);
        this.props.history.push('/dashboard');
    };

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState({name});
        this.props.setName(name);
    };

    saveListName = () => {
        this.setState({ list_saved: true });
    };

    editListName = () => {
        this.setState({ list_saved: false });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        {
                            (!this.state.list_saved) ? (
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
                                    {
                                        (!!this.state.name) && (
                                            <a onClick={() => this.saveListName()} className="waves-effect waves-light btn">Save Name</a>
                                        )
                                    }
                                </div>
                            ) : (
                                <div className="row">
                                    <h3>Job Name: { this.state.name } </h3>
                                    <a onClick={() => this.editListName()} className="waves-effect waves-light btn">Edit Name</a>
                                </div>
                            )
                        }
                    </form>
                </div>
                {
                    (this.state.list_saved) && (
                        <KeyFinder history={this.props.history} />
                    )
                }
                <div className="row">
                    {           
                        (this.props.list.items.length > 0) &&
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
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    addList: (list) => dispatch(startAddList(list)),
    setName: (name) => dispatch(setName(name)),
});

const mapStateToProps = (state, props) => {
    const listName = state.createlist.name;
    const list = state.createlist;
    const user = state.auth.email;
    return { listName, list, user };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewListPage);