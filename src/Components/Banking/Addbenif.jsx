import React, {useState, useEffect} from "react";
import { Grid, TextField, Button, Alert} from "@mui/material";
import Select from "react-select";
import axios from "axios";


export const Addbenif=({acctypeOption})=>{
    const[accNo, setAccno]=useState(654467);
    const[refAccNo, setRefAccno]=useState(65467);
    const[accType, setAcctype]=useState({});
    const[name, setName]=useState("");
    const[limit, setLimit]=useState(1000);
    const[iseActive]=useState(true);
    const[isValid, setIsvalid]=useState(false);
    const[msg, setMsg]=useState("");

    useEffect(()=>{
       accNo && limit>=1000 && accType && name ? setIsvalid(true):setIsvalid(false)
    },[accNo,name,limit,accType]);


    const handleAdd=async()=>{
      const payload={
        accNo,
        name,
        accType: accType.value,
        refAccNo,
        iseActive,
        limit
      };

      const result= await axios.post("http://localhost:7500/addbenif", payload);
      result.status===200 && setMsg(result.data) 
      result.status===200 && handleClrear()
      
    }
    useEffect(()=>{
      if(msg){ setTimeout(()=>{
        setMsg("")
       },5000)
    }
    },[msg])


    const handleClrear=()=>{
        setAccno("")
        setName("")
        setLimit("")
        setAcctype({});
    };

    

    return(
        <React.Fragment>
        <Grid container spacing={3}>
            
        <Grid item xs={4}>
            <TextField variant="outlined" value={accNo} onChange={(e)=>setAccno(e.target.value)} label="Benificiary Account" type="number" fullWidth/>
        </Grid>

        <Grid item xs={4}>
            {/* <TextField variant="outlined" fullWidth/> */}
            <Select variant="outelined"value={accType}   label="Benificiary Account Type" onChange={(val)=>setAcctype(val)} options={acctypeOption} />
        </Grid>

        <Grid item xs={4}>
            <TextField variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} label="Benificiary Name" fullWidth />
        </Grid>

        <Grid item xs={4}>
            <TextField variant="outlined" value={limit} onChange={(e)=>setLimit(e.target.value)} label="Benificiary Max limit" type="number" fullWidth/>
        </Grid>

        <Grid item xs={4}>
            <Button onClick={handleAdd} disabled={!isValid} variant="contained" fullWidth>Add</Button>
        </Grid>

        <Grid item xs={4}>
            <Button onClick={handleClrear} variant="contained" fullWidth>Clear</Button>
        </Grid>

        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
            {msg && <Alert severity="success">{msg}</Alert>}
        </Grid>


        </Grid>
        </React.Fragment>
    )
}