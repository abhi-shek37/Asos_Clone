import React, { useState } from 'react'
import CartContext from './CartContext'
const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])
    const [favorites,setFavorites] = useState([])
    
    const addToCart = (item) => {
        const existingItem = cart.find((cart)=>cart.id === item.id)
        if(existingItem){
           setCart((prevItem)=> prevItem.map((item2)=>{
            return (
                item2.id === item.id ? {...item2,quantity:item2.quantity+1} : item2
            )
           }))
        }else{
       setCart((prevItem)=>[...prevItem,{...item,quantity:1}])
        }
    }
    const addToFav = (item) =>{
      const existingItem = favorites.find((favItem) => favItem.id === item.id);
      if (!existingItem) {
        setFavorites((prevItems) => [...prevItems, item]);
      }
    }

    const removeFromCart = (item) => {
        const removeitem = cart.filter((item2)=>{
            return item2.id != item.id
        })
        setCart(removeitem)
    }
    const removeFromFav = (item) => {
      const removeitem = favorites.filter((item1)=>{
        return item1.id !== item.id
      })
      setFavorites(removeitem);
    }
    const total = cart.reduce((acc,curr)=>{
        return acc+ curr.price*curr.quantity;
    },0)
    const increaseItem = (item) => {
        setCart((prevItem)=>prevItem.map((item2)=>{
            return item2.id === item.id ? {...item2,quantity:item2.quantity+1} : item2
        }))
    }
    const decreaseItem = (item) => {
        setCart((prevItem) =>
          prevItem.map((item2) => {
            return item.id === item2.id && item2.quantity>1
              ? { ...item2, quantity: item2.quantity - 1 }
              : item2;
          })
        );
    }

  return (
    <CartContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        removeFromCart,
        total,
        increaseItem,
        decreaseItem,
        addToFav,
        removeFromFav,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider
