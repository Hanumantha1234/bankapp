import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Button } from "@mui/material";
import { AccountSummary } from "./Banking/AccountSummary";



export const Home=()=>{
    const dispatch=useDispatch();

    const handleSharath=()=>{
       dispatch({
        type:"accinfo",
        payload:{
            accNo:5005,
        }
       })
    }
    const handleB1=()=>{
       dispatch({
        type:"accinfo",
        payload:{
            accNo:55,
        }
       })
    }

    const handleShashi=()=>{
     dispatch({
        tyoe:"accinfo",
        payload:{
            accNo:7009,
        }
     })
    }
   
    return(
        <React.Fragment>
            <Grid container spacing={3}>

             <Grid item xs={6}>
                Account Summary
             </Grid>
             
             <Grid item xs={6}>
                Loan Summary
             </Grid>

             <Grid item xs={6}>
                <AccountSummary/>
             </Grid>

             <Grid item xs={6}>
            Loan  Home
            <Button onClick={handleSharath} variant="contained">Sharath Acc Info</Button>
            <Button onClick={handleShashi} variant="contained" >Shashi Acc Info</Button>
            <Button onClick={handleB1} variant="contained" >B1</Button>
            {/* <Button onClick={handleB2} variant="contained" >B2</Button>
            <Button onClick={handleB3} variant="contained" >B3</Button>
            <Button onClick={handleB4} variant="contained" >B4</Button>
            <Button onClick={handleB5} variant="contained" >B5</Button>
            <Button onClick={handleB6} variant="contained" >B6</Button>
            <Button onClick={handleB7} variant="contained" >B7</Button>
            <Button onClick={handleB8} variant="contained" >B8</Button>
            <Button onClick={handleB9} variant="contained" >B9</Button>
            <Button onClick={handleB10} variant="contained" >B10</Button> */}
             </Grid>

            </Grid>
        </React.Fragment>
    )
}