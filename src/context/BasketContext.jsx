import { createContext, useContext } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const BasketContext = createContext();

export function BasketProvider({ children }) {
    const [basket, setBasket] = useLocalStorage("basket");
  
  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  return useContext(BasketContext);
}
