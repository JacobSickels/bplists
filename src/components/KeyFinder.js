import React from 'react';
import { connect } from 'react-redux';
import { getNames } from '../selectors/list';
import { addToRoute } from '../actions/route';


export class KeyFinder extends React.Component {

    onRouteChange = (item) => {
        this.props.addToRoute(item);
        console.log(this.props.route);
        if(this.props.route.length === 2) {
            this.props.history.push("/add");
        }
    }

    render() {
        return (  
            <div className="row">
                <h1>Find List Items: </h1>
                {
                    this.props.items.map((item, index) => (
                        <div className="col s6 m3 list-button" key={index}> 
                            <button onClick={() => this.onRouteChange(item)}>
                                <h2>{item.replace("-",".").toUpperCase()}</h2>
                            </button>        
                        </div>
                    ))  
                }
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    addToRoute: (item) => dispatch(addToRoute(item))
});

const mapStateToProps = (state, props) => {
    const items = getNames(state.inventory, state.route);
    const route = state.route;
    return { items, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyFinder);