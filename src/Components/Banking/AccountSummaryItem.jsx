import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const AccountSummaryItem=({item})=>{
    return(
            <Grid item xs={4}>
                <Card sx={{textAlign:"center", bgcolor:"#1976d2", color:"white"}}>
                    <CardContent>{item}</CardContent>
                </Card>
            </Grid>
        
    )
}