import { useEffect, useState } from "react";
import React from "react";
import { Product } from "../api/types/products";

interface ProductWithQty extends Product {
  quantity: number;
}

type ProductById = Record<Product["id"], ProductWithQty>;
export interface CartContextState {
  products: ProductById;
  setProducts: (update: ProductById) => void;
}

export interface UseCartProps {
  children: React.ReactChild;
}

const defaultState: CartContextState = {
  products: {},
  setProducts: () => console.warn("missing wrapper for cart context"),
};

const CartContext = React.createContext(defaultState);

const CartContextProvider = ({ children }: UseCartProps) => {
  const [products, setProducts] = useState<ProductById>(getInitialProducts());

  function getInitialProducts() {
    const storage = localStorage.getItem("audiophile-cart");
    if (storage) {
      return JSON.parse(storage);
    }
    return {};
  }

  useEffect(() => {
    localStorage.setItem("audiophile-cart", JSON.stringify(products));
  }, [products]);

  useEffect(() => {}, [products]);
  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
