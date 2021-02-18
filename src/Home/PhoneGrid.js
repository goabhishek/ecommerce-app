import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFilteredPhones } from "../selectors/phones";
import homeStyle from "./homeStyle";
import PhoneGridItem from "./PhoneGridItem";

const PhoneGrid = ({classes}) => {
  const filteredPhones = useSelector(getFilteredPhones);
  // Set pagination and limit phones 12 per page
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage] = useState(12);

  // Get current phones
  const indexOfLastPhone = currentPage * phonesPerPage;
  const indexOfFirstPost = indexOfLastPhone - phonesPerPage;
  const currentPhones = filteredPhones.slice(
    indexOfFirstPost,
    indexOfLastPhone
  );

  // Get pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPhones.length / phonesPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (filteredPhones.length < 12) {
      setCurrentPage(1);
    }
  }, [filteredPhones]);

  // Change page
  const paginate = (number) => setCurrentPage(number);

  return (
    <Fragment>
      <Grid container className="phone-grid" spacing={1}>
        {currentPhones.map((phone) => (
          <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
            <PhoneGridItem phone={phone} key={phone.id} />
          </Grid>
        ))}
      </Grid>
      <div className="pagination">
        <ul className={classes.ul}>
          {filteredPhones.length > 12
            ? pageNumbers.map((number) => (
                <li
                  style={{listStyle:'none',background:'blue',display:'inline',marginLeft:'2%',color:'white',padding:'5px',borderRadius:'5%',cursor:'pointer'}}
                  className={currentPage === number ? "active" : ""}
                  key={number}
                  onClick={() => paginate(number)}
                >
                  {number}
                </li>
              ))
            : null}
          <div className="bar"></div>
        </ul>
      </div>
    </Fragment>
  );
};

export default withStyles(homeStyle)(PhoneGrid);
