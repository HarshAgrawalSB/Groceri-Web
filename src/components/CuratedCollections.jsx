import React from "react";
import CollectionsCarousel from "./carousel/CollectionsCarousel";

const CuratedCollections = () => {
  return (
    <div>
      <div className="text-center my-10 ">
        <h1 className="text-2xl font-medium py-1">Curated Collections</h1>
        <h3 className="text-lg py-1 font-normal">
          We have categories the best quality grocery items
        </h3>
      </div>

      <div>
        <CollectionsCarousel />
      </div>
    </div>
  );
};

export default CuratedCollections;
