import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import LayoutComponent from "../components/layout";
import fireDB from "../fireConfig";
import { fireproducts } from "../products";
const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDataProducts();
  }, []);

  const addData = async () => {
    try {
      await addDoc(collection(fireDB, "users"), { name: "hakim", age: 28 });
    } catch (error) {
      console.log(error);
    }
  };

  const getDataProducts = async () => {
    try {
      const users = await getDocs(collection(fireDB, "products"));
      let listProducts = [];

      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        listProducts.push(obj);
      });
      console.log(listProducts);
      setProducts(listProducts);
    } catch (error) {
      console.log(error);
    }
  };

  // const addProductsData = async () => {
  //   fireproducts.map(async (product) => {
  //     try {
  //       await addDoc(collection(fireDB, "products"), product);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  // };
  return (
    <LayoutComponent>
      <h1>HomePage</h1>
      <button onClick={addData}>Add Data</button>
      <button onClick={getDataProducts}>Get Data Product</button>
      {/* <button onClick={addProductsData}>Add product Data</button> */}
    </LayoutComponent>
  );
};

export default HomePage;
