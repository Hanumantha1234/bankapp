import React from "react";
import { NavItem } from "./NavItem";
import { Login } from "./Banking/Login";
import { Grid } from "@mui/material";


export const Nav=()=>{
    return(
        <Grid container spacing={2} className="nav">
    < React.Fragment>
    <NavItem path="/home" title="Home" xs={2}/>
    <NavItem path="/banking" title="Banking" xs={2}/>
    <NavItem path="/cards" title="Cards" xs={2}/>
    <NavItem path="/supports" title="Support" xs={2}/>
    <NavItem path="/register" title="Register" xs={2}/>
    <NavItem path="/login" title="Login" xs={2}/>
    </React.Fragment>
    </Grid>
    )
}