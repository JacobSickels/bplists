import React from 'react';
import { connect } from 'react-redux';
import List from './List';

export class Lists extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {
                    this.props.lists.length === 0 ? (
                        <div className="">
                            <span>No Lists</span>
                        </div>
                    ) : (
                        this.props.lists.map((list) => {
                            return <List key={list.id} list={list} />;   
                        })  
                    )
                }
                <div className="row button-new-list">
                    <div className="center">
                        <a className="waves-effect waves-light btn" href="/new"><i className="material-icons left">add</i>New List</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    };
};

export default connect(mapStateToProps)(Lists);