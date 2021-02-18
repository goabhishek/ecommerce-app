import { Button } from "@material-ui/core";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/phones";
// import Cart from "../shopping-cart-solid.svg";

const AddToCart = ({ phone }) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Button
        variant="contained"
        color="secondary"
        className="add-to-cart mb-small"
        onClick={() => dispatch(addToCart(phone.id))}
      >
        {/* <Cart height="15" width="15" color="white" className="cart" /> */}
        Add
      </Button>
    </Fragment>
  );
};

export default AddToCart;
