import { TextField, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTextFilter } from "../actions/filters";
import { getSearchBoxInput } from "../selectors/filters";
import CartBox from "./CartBox";

const SearchBox = () => {
  const inputValue = useSelector(getSearchBoxInput);
  const dispatch = useDispatch();

  const searchPhone = (e) => {
    const value = e.target.value;
    dispatch(setTextFilter(value));
  };

  return (
    <div className="search-box">
      <CartBox />
      <Typography variant="subtitle1">Search Phones</Typography>
      <TextField
        label="Search"
        variant="outlined"
        className="search-box--input"
        type="text"
        value={inputValue}
        onChange={searchPhone}
      />
    </div>
  );
};

export default SearchBox;
