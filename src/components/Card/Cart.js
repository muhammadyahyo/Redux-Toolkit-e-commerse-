import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItem = useSelector((state) => state.cart.items);
  console.log(cartItem, "cartItem");
  return (
    <Card className={classes.cart}>
      <h2>Your shoping cart</h2>
      <ul>
        {cartItem.map((e) => (
          <CartItem
            key={e.id}
            item={{
              id: e.id,
              title: e.name,
              quantity: e.quantity,
              total: e.totalPrice,
              price: e.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
