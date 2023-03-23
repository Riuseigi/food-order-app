import React, {useReducer} from 'react'


import CartContext from './cart-context.'


const defaultCartState ={
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updateTotalAmount
        }
    }
    return defaultCartState
}
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState)
    const addItemToCarthandler = (item) => {
        dispatchCartAction({type: 'ADD', item:item})
    }
    const removeItemToCarthandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id:id})
    }
    const cartContext ={
        items : cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCarthandler,
    removeitem: removeItemToCarthandler
    }
  return (
  
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider