import React from 'react';
import Item from './Item';

export default class ItemList extends React.Component {
    static propTypes = {
        removeItem: React.PropTypes.func.isRequired,
        checkItem: React.PropTypes.func.isRequired,
        items: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                qty: React.PropTypes.number.isRequired,
                check: React.PropTypes.bool.isRequired
            }).isRequired
        ).isRequired
    }
    render() {
        return <table className="hover">
            <thead>
                <tr>
                    <th width="50">#</th>
                    <th width="350">Name</th>
                    <th width="100">Quantity</th>
                    <th width="150"></th>
                </tr>
            </thead>
            <tbody>
            {this.props.items.map((item, index) => {
                return <Item {...item} key={index} 
                                       index={index} 
                                       onRemoveItemClick={this.props.removeItem} 
                                       onCheckItemClick={this.props.checkItem} />
            })}
            </tbody>
        </table>
    }
}