import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

const { createContext } = require("react");

let ProductContext = createContext({});

export const ProductContextProvider = (props) => {
  let [productList, setProductList] = useState([]);

  let getData = async () => {
    let url = `https://fakestoreapi.com/products`;
    let response = await fetch(url, { method: "GET" });
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getData();
  }, []); // only once when component will load

  let values = {
    productList,
  };
  return (
    <ProductContext.Provider value={values}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
