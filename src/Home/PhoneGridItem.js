import { Button, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/phones";
import phoneImg from "../product-2.png";
import homeStyle from "./homeStyle";

const PhoneGridItem = ({ phone, classes }) => {
  const dispatch = useDispatch();

  return (
    <Paper
      className="phone-item"
      style={{ padding: "10px", height: "500px" }}
      elevation={2}
      key={phone.id}
    >
      <div
        className="phone-item--box"
        style={{
          width: " 100%",
          height: " 60%",
          borderBottom: "1px solid rgba(153, 153, 153, 0.3)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={phoneImg}
          alt="phone"
          className="phone-item--img"
          style={{
            width: "100%",
            height: "80%",
            objecFit: "contain",
          }}
        />
      </div>
      <div className="phone-item--info">
        <div className="flex-row">
          <Typography className="title">
            {phone.brand} {phone.name}
          </Typography>
          <p className="price">${phone.price}</p>
        </div>
        <Typography className="description">
          {phone.description.substring(0, 20)}...
        </Typography>
      </div>
      <div
        className="buttons"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          endIcon={<ShoppingCartIcon />}
          onClick={() => dispatch(addToCart(phone.id))}
        >
          Add
        </Button>
        <Button variant="contained" className={classes.button}>
          <Link
            to={`/phones/${phone.id}`}
            className="more-info"
            style={{ textDecoration: "none" }}
          >
            {"More Info"}
          </Link>
        </Button>
      </div>
    </Paper>
  );
};

export default withStyles(homeStyle)(PhoneGridItem);
