import React from "react";
import Product from "../product/Product";
import "./ProductList.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Recent Projects Created by React</h1>
        <p className="pl-desc">
          Name of the respective are mentioned and they clickable. Once they are clicked they are redirected to the online deployed project.
        </p>
      </div>
          <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} title={item.title}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
