import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import { sortLists } from '../selectors/list';

export class Lists extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="row button-new-list">
                    <div className="center">
                        <a className="waves-effect waves-light btn" href="/new"><i className="material-icons left">add</i>New List</a>
                    </div>
                </div>
                {
                    this.props.lists.length === 0 ? (
                        <div className="list-noitems">
                            <h3>No Lists</h3>
                        </div>
                    ) : (
                        this.props.lists.map((list) => {
                            return <List key={list.id} list={list} />;   
                        })  
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    const sortedLists = sortLists(state.lists);


    return {
        lists: sortedLists
    };
};

export default connect(mapStateToProps)(Lists);