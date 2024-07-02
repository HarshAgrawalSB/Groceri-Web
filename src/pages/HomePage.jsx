import React from "react";
import Banner from "../components/Banner";
import HomePageCarousel from "../components/HomePageCarousel";
import DiscountBanner from "../components/DiscountBanner";
import CuratedCollections from "../components/CuratedCollections";
import DownloadBanner from "../components/DownloadBanner";
import GroceryProducts from "../components/GroceryProducts";

const HomePage = () => {
  return (
    <>
      <section>
        <Banner />
        <HomePageCarousel />
        <GroceryProducts />

        <DiscountBanner />
        <CuratedCollections />
        {/* <DownloadBanner /> */}
      </section>
    </>
  );
};

export default HomePage;
