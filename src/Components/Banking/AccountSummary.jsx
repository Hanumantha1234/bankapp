import React, { useEffect, useState } from "react";
import { AccountSummaryItem } from "./AccountSummaryItem";
import { Grid } from "@mui/material";
import axios from "axios";

export const AccountSummary=()=>{
    const[data, setData]=useState({});
    const getData=async()=>{
        const payload={
            accNo:65467,
        }
        const result=await axios.post("http://localhost:7500/balance",payload);
        setData(result.data)

    };

    useEffect(()=>{
      getData()
    },[])
    return(
        <React.Fragment>
            <Grid container spacing={2}>
            <AccountSummaryItem item="Total Credits" />
            <AccountSummaryItem item="Total Debits" />
            <AccountSummaryItem item="Total Balance" />
            <AccountSummaryItem item={data.creditAmnt} />
            <AccountSummaryItem item={data.debitAmnt} />
            <AccountSummaryItem item={data.balance} />
            </Grid>
        
        </React.Fragment>
    )
}