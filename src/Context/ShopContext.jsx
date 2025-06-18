// import React,{createContext, useState} from "react";
//  import all_product from "../Components/Assets/all_product";


// export const ShopContext = createContext(null);
// const getDefaultCart = ()=>{
//     let cart = {};
//     for(let index =0; index<all_product.length+1;index++){
//         cart[index]=0;
//     }
//     return cart;
// }

// const ShopCategoryProvider = (props) =>{
//     const [cartItems, setCartItems] = useState(getDefaultCart());
    
     
//     const addToCart = (itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         console.log(cartItems);
//     }

//     const removeFromCart = (itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }

//      const getTotalCartAmount = () => {
//         let totalAmount =0;
//         for(const item in cartItems)
//         {
//             if(cartItems[item]>0)
//             {
//                 let itemInfo = all_product.find((product)=>product.id===Number(item))
//                 totalAmount += itemInfo.new_price * cartItems[item];
//             }
//             return totalAmount;
//         }
//      }
     
//      const getTotalCartItems =() =>{
//         let totalItem =0;
//         for(const item in cartItems){
//             if(cartItems[item]>0){
//                 totalItem+= cartItems[item];
//             }
//         }
//         return totalItem;
//      }

//     const contextValue = {getTotalCartItems, getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
//     return(
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopCategoryProvider;


import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

// Initialize cart with all product IDs set to 0
const getDefaultCart = () => {
    let cart = {};
    all_product.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
};

const ShopCategoryProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Log cartItems whenever it updates (for debugging)
    useEffect(() => {
        console.log("Cart Items Updated:", cartItems);
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1
        }));
    };

    const updateItemQuantity = (itemId, quantity) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: quantity
        }));
    };

    const clearCart = () => {
        setCartItems(getDefaultCart());
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const product = all_product.find(p => p.id === Number(itemId));
                if (product) {
                    totalAmount += product.new_price * cartItems[itemId];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalItem += cartItems[itemId];
            }
        }
        return totalItem;
    };

    const contextValue = {
        cartItems,
        all_product,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        clearCart,
        getTotalCartAmount,
        getTotalCartItems
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopCategoryProvider;
