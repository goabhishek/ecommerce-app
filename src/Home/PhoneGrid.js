import { Grid } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFilteredPhones } from "../selectors/phones";
import PhoneGridItem from "./PhoneGridItem";

const PhoneGrid = () => {
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
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
            <PhoneGridItem phone={phone} key={phone.id} />
          </Grid>
        ))}
      </Grid>
      <div className="pagination">
        <ul>
          {filteredPhones.length > 12
            ? pageNumbers.map((number) => (
                <li
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

export default PhoneGrid;
