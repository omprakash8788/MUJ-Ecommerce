import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

// 1. Create
export const ShopContext = createContext();

// Create context provider function
const ShopContextProvider = (props) => {
  // logic
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemdId, size) => {
    if(!size){
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemdId]) {
      if (cartData[itemdId][size]) {
        cartData[itemdId][size] += 1;
      } else {
        cartData[itemdId][size] = 1;
      }
    }
    else{
      cartData[itemdId] = {};
      cartData[itemdId][size] = 1;

    }
    setCartItems(cartData)
  };

   const getCartCount=()=>{
    let totalCount =0;
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item]>0){
            totalCount +=cartItems[items][item];
          }
          
        } catch (error) {
           console.log(error)
        }
      }
    }
    return totalCount;
   }

   const updateQuantity = async(itemdId, size, quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemdId][size]= quantity;
    setCartItems(cartData)
   }

  useEffect(()=>{
   console.log(cartItems)
  },[cartItems])

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
