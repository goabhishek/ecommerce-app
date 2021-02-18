import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartState, getCartTotal } from "../selectors/phones";
// import Cart from "../c";

const CartBox = () => {
  const dispatch = useDispatch();
  const cartInfo = useSelector(getCartState);
  const total = useSelector(getCartTotal);

  const itemQuantity = cartInfo
    .map((item) => item.quantity)
    .reduce((item, total) => item + total, 0);

  return (
    <div
      style={{ color: "color", backgroundColor: "lightGreen", padding: "8px" }}
    >
      <Link
        to="/cart"
        className="cart-box"
        style={{
          textDecoration: "none",
          color: "blue",
        }}
      >
        {/* <Cart height="30" width="30" color="white" /> */}
        <p>
          {itemQuantity} items in cart {total}$
        </p>
      </Link>
    </div>
  );
};

export default CartBox;
