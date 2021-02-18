import { Paper } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import React from "react";
import PhoneGrid from "./PhoneGrid";
import SearchBox from "./SearchBox";

const HomePage = () => {
  return (
    <Paper className="App">
      <SearchBox />
      <FilterList />
      <div className="main-grid">
        <PhoneGrid />
      </div>
    </Paper>
  );
};

export default HomePage;
