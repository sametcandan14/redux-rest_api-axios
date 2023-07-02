import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div
        className="max-w-sm w-[100%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 
        "
        key={id}
      >
        <Link to={`/product/${id}`}>
          <div className="h-80  flex justify-center items-center  overflow-hidden bg-white">
            <img
              src={image}
              alt={title}
              className="max-h-[80%] max-w-[80%] rounded-t-lg object-contain  "
            />
          </div>

          <div className="pt-5 px-2">
            <div className=" h-20 border-b border-gray-500 mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </div>
            <div className="h-8 mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              $ {price}
            </div>
            <div className="h-8 -mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">
              {category}
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
