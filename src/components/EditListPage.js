import React from 'react';
import { connect } from 'react-redux';
import List from './List';


export class EditListPage extends React.Component {

    render() {
        return (
            <div className="container">
                
                <h3>{this.props.list.name}</h3>

                <table className="striped list-details">
                    <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Material</th>
                        <th>Cost (per 1)</th>
                        <th className="hide-on-small-only">Barcode</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.list.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.quantity}</td>
                                <td>{item.description}</td>
                                <td>{item.name}</td>
                                <td>{item.cost}</td>
                                <td>{item.barcode}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

                <div className="row">
                    <div className="col s12">
                        <h2 className="right">Total: ${this.props.total.toFixed(2)} </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <div className="center">
                            <a className="waves-effect waves-light btn" href="/dashboard"><i className="material-icons left">keyboard_backspace</i>Back to Lists</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state, props) => {

    const list = state.lists.find((list) => list.id === props.match.params.id);
    let total = 0;

    list.items.forEach((item) => {
        total += (item.cost) * parseInt(item.quantity);
    });

    console.log(total);

    return { list, total };
};

export default connect(mapStateToProps)(EditListPage);

