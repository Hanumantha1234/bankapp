import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import { Addbenif } from "./Addbenif";
import axios from "axios";

export const Benificiary=()=>{
    const[acctypeOption, setAcctypeOption]=useState([]);

    const getData=async()=>{
        const result=await axios.get("http://localhost:7500/accounttypes");
        setAcctypeOption(result.data);

    };

    useEffect(()=>{
        getData()
    },[])
    return(
        <React.Fragment>
           <Card sx={{textAlign:"center", boxShadow:"3px 3px 3px", bgcolor:"#e6e6e6"}}>
            <CardContent>
                <Addbenif acctypeOption={acctypeOption}/>
            </CardContent>
           </Card>
        </React.Fragment>
    )
}