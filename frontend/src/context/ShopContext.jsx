import { createContext } from "react";
import { products } from "../assets/assets";

export const shopContext = createContext();

const shopContextProvider = (props) => {
  const currency = "NRs";
  const deliveryFee = 10;

  const value = {
    products,
    currency,
    deliveryFee,
  };

  return (
    <shopContext.Provider value={value}>{props.children}</shopContext.Provider>
  );
};

export default shopContextProvider;
