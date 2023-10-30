import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description, image } = props;
  const addItemToCartHandler = () => {
    dispatch(cartAction.addItemToCart({ id, title, price }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <img style={{ width: "300px" }} src={image} alt="img" />
        <header>
          <h3>{`${id}. ${title}`}</h3>
          <div className={classes.price}>{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
