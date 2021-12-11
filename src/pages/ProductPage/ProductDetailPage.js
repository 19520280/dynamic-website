import * as React from "react";
import ProductPolicy from "../../components/ProductDetail/ProductPolicy";
import TableInfo from "../../components/ProductDetail/TableInfo";
import RatingInfoPanel from "../../components/ProductDetail/RatingInfoPanel";
import RatingDetailPanel from "../../components/ProductDetail/RatingDetailPanel";
import CommentPanel from "../../components/ProductDetail/CommentPanel";
import ProductPanel from "../../components/ProductDetail/ProductPanel";
const ProductDetailPage = () => {
  return (
    <>
      <ProductPanel />
      <CommentPanel />
      <ProductPolicy />
      <TableInfo />
      <RatingInfoPanel />
      <RatingDetailPanel />
    </>
  );
};

export default ProductDetailPage;
