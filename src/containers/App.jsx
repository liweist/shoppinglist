import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, checkItem } from '../actions';
import AddItem from './AddItem';
import ItemList from './ItemList';

class App extends React.Component {
    static propTypes = {
        items: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                qty: React.PropTypes.number.isRequired
            }).isRequired
        ).isRequired
    }
    render() {
        const {dispatch, items} = this.props;
        return <div>
            <AddItem onAddItemClick={(item) => dispatch(addItem(item))} />
            <ItemList items={items} 
                      removeItem={(index) => dispatch(removeItem(index))}
                      checkItem={(index) => dispatch(checkItem(index))} />
       </div>
    }
}

export default connect((state) => {
    return {items: state.items};
})(App);