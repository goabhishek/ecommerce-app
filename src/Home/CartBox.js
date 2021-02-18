import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearFilters } from "../actions/filters";
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
    <Fragment>
      <Link
        to="/cart"
        className="cart-box"
        onClick={() => dispatch(clearFilters())}
      >
        {/* <Cart height="30" width="30" color="white" /> */}
        <p>
          {itemQuantity} items in cart {total}$
        </p>
      </Link>
    </Fragment>
  );
};

export default CartBox;
