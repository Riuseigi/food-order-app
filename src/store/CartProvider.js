import React from 'react'
import CartContext from './cart-context.'
const CartProvider = (props) => {
    const addItemToCarthandler = item => {

    }
    const removeItemToCarthandler = id => {
        
    }
    const cartContext ={
        items : [],
    totalAmount: 0,
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