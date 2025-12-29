import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { slug } = useParams();
  return (
    <>
      <div>List Produk {slug}</div>
    </>
  );
};

export default Products;
