import { useEffect, useState } from "react";
import React from "react";
import { Product } from "../../api/types/products";

export interface ProductWithQty extends Product {
  quantity: number;
}

export type ProductById = Record<string, ProductWithQty>;
export interface CartContextState {
  products: ProductById;
  setProducts: (update: ProductById) => void;
  total: number;
}

export interface UseCartProps {
  children: React.ReactChild;
}

const defaultState: CartContextState = {
  products: {},
  setProducts: () => console.warn("missing wrapper for cart context"),
  total: 0,
};

const CartContext = React.createContext(defaultState);

const CartContextProvider = ({ children }: UseCartProps) => {
  const [products, setProducts] = useState<ProductById>(getInitialProducts());
  const [total, setTotal] = useState<number>(0);

  function getInitialProducts() {
    const storage = localStorage.getItem("audiophile-cart");
    if (storage) {
      return JSON.parse(storage);
    }
    return {};
  }

  function getTotal(products: ProductById) {
    return Object.keys(products).reduce<number>((total, k) => {
      return total + products[k].price * products[k].quantity;
    }, 0);
  }

  useEffect(() => {
    localStorage.setItem("audiophile-cart", JSON.stringify(products));
    setTotal(getTotal(products));
  }, [products]);

  useEffect(() => {}, [products]);
  return (
    <CartContext.Provider value={{ products, setProducts, total }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
