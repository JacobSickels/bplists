import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list-showing">
            {
                console.log(this.props.list)
            }
                <div className="list-info--title">
                    <Link to={`/list/${this.props.list.id}`}>
                        <p>{this.props.list.name}</p>
                    </Link>
                </div>
                <div className="list-info">
                    <p className="list-info--creator">Created by: {this.props.list.creator}</p>
                    <p className="list-info--date">{this.props.list.created}</p>
                </div>
            </div>
        );
    }
}

export default List;