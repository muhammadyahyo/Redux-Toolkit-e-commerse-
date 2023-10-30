import { useEffect, useState } from "react";
import { getProduct } from "../../store/product";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const store = useSelector((store) => store.product);
  const dispatchRedux = useDispatch();
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products/")
    //   .then((res) => res.json())
    //   .then((json) => setState(json));
    dispatchRedux(getProduct());
    // console.log(dispatchRedux(getProduct()), "dispatch");
  }, []);
  console.log(store, "store");

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {store.product.map((e) => (
          <ProductItem
            key={e.id}
            id={e.id}
            title={e.title}
            price={e.price}
            description={e.description}
            image={e.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
