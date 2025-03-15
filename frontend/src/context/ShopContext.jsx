
import { createContext } from "react";
import { products } from "../assets/assets";

// 1. Create 
export const ShopContext=createContext();

// Create context provider function 
const ShopContextProvider =(props)=>{

    // logic 
    const currency="$";
    const delivery_fee=10;


  // 
    const value={
         products,
         currency,
         delivery_fee

    }

    return(
        <ShopContext.Provider value={value}>
           {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;