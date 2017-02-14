import React from 'react';

export default class AddItem extends React.Component {
    static propTypes = {
        onAddItemClick: React.PropTypes.func.isRequired
    }
    handleClick = () => {
        let name = $(this.textInput).val();
        let qty = parseInt($(this.qtyInput).val());
        this.props.onAddItemClick({
            name: name,
            qty: qty,
            check: false
        });
        $(this.textInput).val('');
        $(this.qtyInput).val('');
    }
    render() {
        return <div>
            <div className="row">
                <label>Name
                    <input type="text" ref={(textInput) => {this.textInput = textInput}} />
                </label>
            </div>
            <div className="row">
                <label>Quantity
                    <input type="number" ref={(qtyInput) => {this.qtyInput = qtyInput}} />
                </label>
            </div>
            <div className="row">
                <button type="button" className="button expanded" onClick={this.handleClick}>Add Item</button>
            </div>
        </div>
    }
}