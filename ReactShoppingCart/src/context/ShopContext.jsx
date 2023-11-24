import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (newItem) => {
        setCartItems([...cartItems, newItem])
    }

    const removeItem = (i) => {
        const newArr = cartItems.filter((item) => item.id !== i)
        setCartItems(newArr);
    }

    const contextValue = {cartItems, addItem, removeItem }

    console.log(cartItems);

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
};