import { Button, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import phoneImg from "../product-2.png";
import { getAllPhones } from "../selectors/phones";
import CartBox from "./CartBox";

const Phone = ({ match }) => {
  useEffect(() => {}, [match.params.id]);

  const phones = useSelector(getAllPhones);
  const phoneId = phones.find(({ id }) => id === match.params.id);

  return (
    <Paper className="phone-details" style={{width:"60%",marginLeft:"20%",textAlign:'center',height:'70vh',maxHeight:'70vh',overflow:'auto',marginTop:'5%',lineHeight:'1.0'}}>
      <div style={{marginTop:'2%',marginBottom:'2%'}}>
        <div className="phone">
          <div className="phone--box">
            <img src={phoneImg} alt="phone" />
          </div>
          <div className="phone--title">
            <Typography variant='subtitle-1'>
              {phoneId.brand} {phoneId.name}
            </Typography>
            <h3>${phoneId.price}</h3>
          </div>
          <div className="phone--description">
            <p>{phoneId.description}</p>
          </div>
        </div>

        <div className="phone-stats">
          <h1>Phone Details</h1>
          <div className="stat">
            <h2>Brand</h2>
            <p>{phoneId.brand}</p>
          </div>
          {Object.entries(phoneId.stats).map(([key, value]) => {
            return (
              <div className="stat" key={key}>
                <h2>{key}</h2>
                <p>{value.toString()}</p>
              </div>
            );
          })}
        </div>

        <div className="phone-sidebar">
          <CartBox />
          <div className="cart-info">
            <h3>
              {phoneId.brand} {phoneId.name} ${phoneId.price}
            </h3>
          </div>
          {/* <AddToCart phone={phoneId} /> */}
          <Button style={{background:"blue"}}>
          <Link to="/" style={{textDecoration:'none',color:'white'}}>
            Back to store
          </Link>
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default Phone;
