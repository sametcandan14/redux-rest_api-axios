import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("err", err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="grid container mx-auto ">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div
          className="mx-auto mt-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow 
        md:flex-row md:max-w-[80%]  dark:border-gray-700  "
        >
          <img
            src={image}
            className="object-contain  rounded-t-lg max-h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              {title}
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              $ {price}
            </h5>
            <p className="mb-3 font-normal text-gray-700">{category}</p>
            <p className="mb-3 font-normal text-gray-700">{description}</p>
            <button className="bg-green-600 mt-2 text-white w-[200px] py-3 rounded-full text-lg font-bold hover:bg-gray-200 hover:text-black">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
