import React from 'react';

export default class Item extends React.Component {
    static propTypes = {
        onRemoveItemClick: React.PropTypes.func.isRequired,
        onCheckItemClick: React.PropTypes.func.isRequired,
        name: React.PropTypes.string.isRequired,
        qty: React.PropTypes.number.isRequired,
        check: React.PropTypes.bool.isRequired
    }
    render() {
        let checkedLabel = this.props.check ? <span className="label success">Checked</span> : null;
        let checkButtonText = this.props.check ? 'Uncheck' : 'Check';
        return <tr>
            <td>{this.props.index + 1}</td>
            <td>{this.props.name} {checkedLabel}</td>
            <td>{this.props.qty}</td>
            <td>
                <button type="button" className="success button" onClick={() => this.props.onCheckItemClick(this.props.index)}>{checkButtonText}</button>&nbsp;
                <button type="button" className="alert button" onClick={() => this.props.onRemoveItemClick(this.props.index)}>X</button>
            </td>
        </tr>
    }
}