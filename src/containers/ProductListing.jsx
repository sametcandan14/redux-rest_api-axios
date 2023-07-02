import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div
      style={{ marginTop: "50px" }}
      className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 justify-items-center"
    >
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
