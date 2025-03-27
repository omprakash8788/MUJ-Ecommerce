
import { createContext, useState } from "react";
import { products } from "../assets/assets";

// 1. Create 
export const ShopContext=createContext();

// Create context provider function 
const ShopContextProvider =(props)=>{

    // logic 
    const currency="$";
    const delivery_fee=10;
    const [search, setSearch]=useState("");
    const [showSearch, setShowSearch]=useState(false);



  // 
    const value={
         products,
         currency,
         delivery_fee,
         search,
         setSearch,
         showSearch,
         setShowSearch

    }

    return(
        <ShopContext.Provider value={value}>
           {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;