
"use client";

import  {
  IProducts,
  IProductsContext,
} from "@/types/types-pro";

import {
  createContext,
  useState,
  ReactNode,
  useContext,
} from "react";

const ProductContext = createContext<IProductsContext | undefined>(
  undefined
);

export function ProductProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [planList, setPlanList] = useState<IProducts[]>([]);
  const [savedList, setSavedList] = useState<IProducts[]>([]);

  const value: IProductsContext = {
    planList,
    setPlanList,
    savedList,
    setSavedList,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
  
}
export function useProductContext (){
  const context = useContext(ProductContext)
  if (!context)
    throw new Error ('wrapped the app')
  return context
} 



