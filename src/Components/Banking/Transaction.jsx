import React, { useState, useEffect } from "react";
import { Grid,Card,CardContent,TextField,Button } from "@mui/material";
import Select from "react-select"
import axios from "axios";
import { AccountSummary } from "./AccountSummary";
import { useSelector } from "react-redux";

export const Transaction=()=>{
const select=useSelector

    const[tranOptions, setTranoptions]=useState([]);
    const[accNo, setAccno]=useState(65467);
    const[accType, setAcctype]=useState("S");
    const[amnt, setAmnt]=useState(0);
    const[trasType, settrasType]=useState("D");
    const[isValid, setisValid]=useState(false);

    const handleSubmit=()=>{
        const payload={
            accNo,
            accType,
            amnt,
            trasType,
        };
        console.log(payload)
        axios.post("http://localhost:7500/transaction", payload);
        setAmnt(0);
        setisValid(false);
    };

    useEffect(()=>{
        if(amnt>0){
            setisValid(true)
        }else{
            setisValid(false);
        }
    },[amnt]);

    useEffect(()=>{
        setAccno(select.custid)
        setAcctype(select.accType)
    },[select])

    const getData=async()=>{
       const result=await axios.get("http://localhost:7500/transactiontype");
       setTranoptions(result.data);
    };

    useEffect(()=>{
        getData();
    },[]);
    return(
        <React.Fragment>
         <Card>
            <CardContent>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                     <AccountSummary/>
                    </Grid>

                    <Grid item xs={4}>Amount:</Grid>
                    <Grid item xs={8}><TextField onChange={(e)=>setAmnt(e.target.value)} value={amnt} label="Amount" variant="standard" fullWidth/> </Grid>
                    <Grid item xs={4}>Account Type</Grid>
                    <Grid item xs={8}><Select options={tranOptions} onChange={(val)=>settrasType(val.value)}/>
                         </Grid>
                        
                        <Grid item xs={6}>
                       <Button onClick={handleSubmit} disabled={!isValid} variant="contained" fullWidth>Submit</Button>
                        </Grid>
                        <Grid item xs={6}>
                       <Button variant="contained" fullWidth>Cancel</Button>
                        </Grid>
                         

                </Grid>
            </CardContent>
         </Card>
        </React.Fragment>
    )
}