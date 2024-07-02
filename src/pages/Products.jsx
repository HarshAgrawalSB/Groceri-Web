/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import GroceryProducts from "../components/GroceryProducts";
import {
  useLoaderData,
  useLocation,
  useRouteLoaderData,
  useSearchParams,
} from "react-router-dom";
import {
  getProductByCategories,
  getProducts,
} from "../services/ProductService";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { search } = useLocation();

  const [filterProducts, setFilterProducts] = useState([]);

  const loaderData = useRouteLoaderData("Home");

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const data = await getProducts();
        if (data.length > 0) {
          setFilterProducts(data);
        }
      };
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const searchedData = loaderData.filter((i) => {
    return i.name.toString().includes(search);
  });
  console.log(search);

  const filterByCategory = async (categoryName) => {
    setSearchParams({ category: categoryName });
    try {
      const result = await getProductByCategories(categoryName);
      console.log(result);
      setFilterProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(filterProducts);

  // useEffect(() => {
  //   const isSearchParams = searchParams.get("category");
  //   if (isSearchParams) {
  //     filterByCategory(isSearchParams);
  //   }
  // });

  return (
    <>
      <div className=" ">
        <div className="flex flex-row justify-between w-[80%] mx-auto mt-5">
          <h1 className="border font-medium text-lg">Categories</h1>

          {/* <button onClick={() => {
            filterByCategory('all');
          }} className="underline font-medium text-lg">All</button> */}

          {loaderData?.map((category, index) => (
            <>
              <div key={category._id} className="underline font-medium text-lg">
                <button
                  onClick={() => {
                    filterByCategory(category.name);
                  }}
                  className="underline"
                >
                  {category.name}
                </button>
              </div>
            </>
          ))}
        </div>

        <div className="md:py-10 py-5">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mx-auto ">
            {filterProducts?.map((item, index) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
