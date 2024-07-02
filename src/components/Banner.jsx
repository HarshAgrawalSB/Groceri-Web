import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [bannerSearchText, setBannerSearchText] = useState("");
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/products', { search: bannerSearchText })
  }


  return (
    <div className="md:bg-[url('https://borobazar.vercel.app/assets/images/hero/banner-4.webp')] bg-[url('https://borobazar.vercel.app/assets/images/hero/banner-mobile-4.png')]  bg-cover bg-no-repeat md:bg-right bg-top  md:h-[35rem] h-[25rem] w-auto">
      {/* <i
      src="https://borobazar.vercel.app/assets/images/hero/banner-4.webp"
      alt="banner"
      // className="w-full h-full"
    /> */}

      <div className="mx-auto py-24 md:py-28 h-full flex flex-col text-center px-6 xl:max-w-[750px] 2xl:max-w-[850px] max-w-[480px] md:max-w-[550px]">
        <div className="text-center">
          <h2 className="text-[#0b4635] text-3xl md:text-4xl font-manrope md:font-semibold font-bold leading-snug md:leading-tight xl:leading-[1.3em] mb-3 md:mb-4 xl:mb-3 -mt-2 xl:-mt-3 2xl:-mt-4 text-brand-tree-dark xl:text-5xl 2xl:text-[55px]">
            Healthy vegetable that you deserve to eat fresh
          </h2>
          <p className="text-md md:text-[17px]  xl:text-lg leading-7 md:leading-8 xl:leading-[1.92em] xl:px-16 text-brand-dark text-opacity-80 2xl:px-32">
            We source and sell the very best beef, lamb and pork, sourced with
            the greatest care from farmer.
          </p>
          <div className="hidden lg:block max-w-[700px] mx-auto md:pt-1 lg:pt-3">
            <div className="lg:flex">
              <div
                className="relative flex w-full mt-6 rounded-md"
                noValidate=""
                role="search"
              >
                <label
                  htmlFor="hero-search"
                  className="flex flex-1 items-center py-0.5"
                >
                  <input
                    id="hero-search"
                    className="border-2 w-full text-sm transition-all duration-200 outline-none text-brand-dark/80 h-14 ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 md:h-16 shadow-heroSearch placeholder:text-brand-dark/50 placeholder:pl-5 rounded-md lg:text-base focus:ring-2 focus:ring-brand"
                    placeholder="What are you looking..."
                    aria-label="Search"
                    autoComplete="off"
                    value={bannerSearchText}
                    onChange={(e) => {
                      setBannerSearchText(e.target.value);
                    }}
                  />
                </label>
                <button
                  onClick={() => { handleSearch() }}
                  title="Search"
                  className="right-0 absolute top-0 flex items-center justify-center h-full transition duration-200 ease-in-out outline-none ltr:right-0 rtl:left-0 w-14 md:w-16 hover:text-heading focus:outline-none"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-5 h-5 text-brand-dark text-opacity-40"
                  >
                    <path
                      d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
