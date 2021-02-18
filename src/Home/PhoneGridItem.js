import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearFilters } from "../actions/filters";
import AddToCart from "../Cart/AddToCart";
import phoneImg from "../product-2.png";

const PhoneGridItem = ({ phone }) => {
  const dispatch = useDispatch();

  return (
    <Paper className="phone-item" elevation={2} key={phone.id}>
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
          {phone.description.substring(0, 53)}...
        </Typography>
      </div>
      <div className="buttons">
        <AddToCart phone={phone} />
        <Button variant="contained">
          <Link
            to={`/phones/${phone.id}`}
            className="more-info"
            onClick={() => dispatch(clearFilters())}
          >
            More Info
          </Link>
        </Button>
      </div>
    </Paper>
  );
};

export default PhoneGridItem;
