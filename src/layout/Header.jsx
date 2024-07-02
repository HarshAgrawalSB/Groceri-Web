/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import LOGO from "../assets/groceri_logo.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi";
import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getProductByCategories } from "../services/ProductService";
import AuthModal from "../components/modal/AuthModal";
import { useSelector } from "react-redux";
import { selectEmail, selectToken, selectUserName } from "../redux/slices/tokenSlice";
import Footer from "./Footer";
import { selectTotalQuantity } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const [categories, setCategories] = useState([]);

  const totalQuantity = useSelector(selectTotalQuantity);

  const user = useSelector(selectUserName);
  const userEmail = useSelector(selectEmail);
  const token = useSelector(selectToken);

  const initialCartItems =
    JSON.parse(localStorage.getItem("cart"))?.items || [];
  const [cartQuantity, setCartQuantity] = useState(initialCartItems);

  useEffect(() => {
    const quantity =
      JSON.parse(localStorage.getItem("cart"))?.items == undefined
        ? []
        : JSON.parse(localStorage.getItem("cart"))?.items;
    setCartQuantity(quantity);
  }, []);

  const authModal = useRef();

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleNavBarHover = async (val) => {
    setIsShown(val);
    if (val) {
      const res = await fetch("http://localhost:3000/home/categories");
      const data = await res.json();
      setCategories(data);
    }
  };

  const handleCategories = async (categoryName) => {
    navigate("/products");
    setSearchParams({ category: categoryName });
    setIsShown(false);
    // const result = await getProductByCategories(categoryName)
  };

  const handleAuthModal = () => {
    authModal.current.open();
  };

  const navigateToCart = () => {
    if (!token) {
      toast.error("Sign in or create an account to view Cart");
      navigate("/");
    }
    else navigate('/cart')
  }

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 border-b-2">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img
                src={LOGO}
                className="md:w-full h-9  sm:h-9"
                alt="Flowbite Logo"
              />
              <span className=" mx-1 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Groceri
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <button
                // to="/cart"
                onClick={navigateToCart}
                className="text-gray-800 flex items-center justify-between"
              >
                <div>
                  <HiOutlineShoppingBag className="h-6 w-6 mt-1.5" />
                  <div className="bg-[#02B290] dark:bg-white text-white text-center text-xs  rounded-full   relative bottom-7 left-3 z-10  ">
                    {totalQuantity}
                  </div>
                </div>
                <span className="mx-1 text-[1.05rem]">Cart</span>
              </button>
              {user != null ? (
                <span className="mx-4 text-lg font-medium border rounded-xl p-2 underline">
                  {user}
                </span>
              ) : (
                <Link
                  onClick={handleAuthModal}
                  className="flex items-center text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  <HiOutlineUserCircle className="h-6 w-6" />
                  <span className="mx-1 text-[1.05rem]">Sign in</span>
                </Link>
              )}
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between  items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <Link
                    onMouseEnter={() => {
                      handleNavBarHover(true);
                    }}
                    onMouseDownCapture={() => {
                      handleNavBarHover(false);
                    }}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Categories
                  </Link>

                  {isShown && (
                    <>
                      <ul className="absolute mt-5 border-2 bg-white p-4">
                        {categories?.map((i, index) => (
                          <>
                            <li
                              key={i._id}
                              className="hover:underline hover:translate-x-2 hover:cursor-default"
                              onClick={() => {
                                handleCategories(i.name);
                              }}
                            >
                              {i.name}
                            </li>
                          </>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
                <li>
                  <Link
                    to="/products"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <AuthModal ref={authModal} />

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Header;

export const loader = async () => {
  const res = await fetch("http://localhost:3000/home/categories");
  const data = await res.json();
  return data;
};
