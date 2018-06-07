import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../actions/createlist';
import { Modal, Button } from 'react-materialize';


export class ItemList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
            current_route: this.props.route
        };
    }

    addItemModal = ({description, item}) => {
        const quantity = this.state.quantity;

        const addItem = {
            ...item,
            description,
            quantity
        }

        this.props.addItem(addItem);
        this.props.history.push("/new");
    }

    onQuantityChange = (e) => {
        const quantity = e.target.value;
        this.setState({ quantity });
    };

    render() {
        return (
            <div className="container">
                <h1>Item List</h1>
                 <table className="striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th className="hide-on-small-only">Barcode</th>
                        <th>Add to List</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        Object.values(this.props.items).map((item, index) => (
                            <tr key={index}>
                                <td>{this.props.item_desc}{item.name}</td>
                                <td className="hide-on-small-only">{item.barcode}</td>
                                <td>
                                    <Modal
                                        header={this.props.item_desc+item.name}
                                        actions={
                                            <Button modal="close" onClick={() => this.addItemModal({description: this.props.item_desc, item})}>Add</Button>
                                        }
                                        trigger={<Button>ADD</Button>}>
                                    
                                        <input 
                                            id="last_name" 
                                            type="number" 
                                            className="validate"
                                            placeholder="Please Input Quantity: "                                     
                                            value={this.state.quantity}
                                            onChange={this.onQuantityChange}
                                        />
                                    </Modal>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

        
        );
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    addItem: (item) => dispatch(addItem(item))
});

const mapStateToProps = (state, props) => {

    const array = Object.values(props.match.params);
    console.log(array);
    let item_desc = array[0].toUpperCase() + " " + array[1] + "\" ";
    if(array[1] === "1-5"){
        item_desc = array[0].toUpperCase() + " 1 1/2\" ";
    }
    let items = state.inventory[array[0]][array[1]][array[2]];
    let route = "/" + array[0] + "/" + array[1] + "/" + array[2];

    return { items, route, item_desc }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);