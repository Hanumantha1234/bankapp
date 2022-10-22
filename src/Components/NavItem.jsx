import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const NavItem=({path, title, xs})=>{             //one line code we can take how many we want
    return(
      <Grid item xs={xs}>
        <Link to={path}>{title}</Link>       
      </Grid>
    )
}