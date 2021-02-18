import { Paper, Typography } from "@material-ui/core";
import React from "react";

const NotFound = () => {
  return (
    <Paper
      elevation={0}
      style={{ height: "100vh", display: "grid", alignItems: "center" }}
    >
      <Typography variant="h3" align="center">
        404 Page Not Found
      </Typography>
    </Paper>
  );
};

export default NotFound;
