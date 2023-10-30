import React from "react";
import { useSelector } from "react-redux";
import Card from "./components/Card/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

const App = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Card />}

      <Products />
    </Layout>
  );
};

export default App;
