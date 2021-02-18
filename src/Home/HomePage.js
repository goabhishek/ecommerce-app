import { Grid } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import React from "react";
import PhoneGrid from "./PhoneGrid";
import SearchBox from "./SearchBox";

const HomePage = () => {
  return (
    <div className="App">
      <Grid container>
        <Grid xl={2} lg={2} md={3} sm={4} xs={5}>
          <div style={{ padding: "8px" }}>
            <SearchBox />
          </div>
        </Grid>

        <Grid item xl={10} lg={10} md={9} sm={8} xs={7}>
          <div className="main-grid">
            <PhoneGrid />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
