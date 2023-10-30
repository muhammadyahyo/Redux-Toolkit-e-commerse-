import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const removeItemFormCart = () => {
    dispatch(cartAction.removeItemFormCart(id));
  };
  const addItemToCart = () => {
    dispatch(cartAction.addItemToCart({ id, title, price }));
  };
  return (
    <li>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quntity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFormCart}>-</button>
          <button onClick={addItemToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
