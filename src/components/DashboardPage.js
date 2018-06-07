import React from 'react';
import {startAddList} from '../actions/lists';
import { connect } from 'react-redux';
import Lists from './Lists';

const list = {
    name: 'test',
    items: [1,2,3,4,5]
}

export class DashboardPage extends React.Component {

    render() {
        return (
            <div className="container">
                <Lists />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddList: (list) => dispatch(startAddList(list))
});

export default connect(undefined, mapDispatchToProps)(DashboardPage);