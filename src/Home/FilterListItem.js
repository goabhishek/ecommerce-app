import { Paper } from "@material-ui/core";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCheckboxFilter, setCheckboxFilter } from "../actions/filters";
import { getAllPhoneBrands, getAllPhones } from "../selectors/phones";

const FilterListItem = () => {
  const phones = useSelector(getAllPhones);
  const phoneBrands = useSelector(getAllPhoneBrands);
  const dispatch = useDispatch();

  const handleFilterBrand = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      dispatch(setCheckboxFilter(value));
    } else {
      dispatch(removeCheckboxFilter(value));
    }
  };

  const brandsItemsCount = {};
  phones.forEach((phone) => {
    brandsItemsCount[phone.brand] = brandsItemsCount[phone.brand] + 1 || 1;
  });

  return (
    <Fragment>
      {phoneBrands.map((phone, i) => {
        return (
          <Paper className="filter-list" key={i} elevation={3}>
            <input
              type="checkbox"
              name={phone}
              id={phone}
              value={phone}
              onChange={(e) => handleFilterBrand(e)}
            />
            <label htmlFor={phone}>
              {phone} ({brandsItemsCount[phone]})
            </label>
          </Paper>
        );
      })}
    </Fragment>
  );
};

export default FilterListItem;
