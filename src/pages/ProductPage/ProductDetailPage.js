import React from "react";
import ProductPolicy from "../components/ProductDetail/ProductPolicy";
import TableInfo from "../components/ProductDetail/TableInfo";
import RatingInfoPanel from "../components/ProductDetail/RatingInfoPanel";
import RatingDetailPanel from "../components/ProductDetail/RatingDetailPanel";
import RatingInfoDetail from "../components/ProductDetail/RatingInfoDetail";
const ProductDetailPage = () => {
  return (
    <>
      <RatingInfoDetail />
      <ProductPolicy />
      <TableInfo />
      <RatingInfoPanel />
      <RatingDetailPanel />
    </>
  );
};

export default ProductDetailPage;
