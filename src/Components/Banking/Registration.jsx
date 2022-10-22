import React, { useEffect, useState } from "react";
import { Grid, TextField, Button, Alert} from "@mui/material";
import Select from "react-select"
import axios from "axios";

export const Registration=()=>{
    const[acctypeOption, setaccttypeOption]=useState();
    const[custid, setCustid]=useState("")
    const[fname, setFname]=useState("")
    const[lname, setLname]=useState("")
    const[password, setPassword]=useState("")
    const[repassword, setrePassword]=useState("")
    const[accType, setAcctype]=useState();
    const[isActive, setisActive]=useState(true)
    const[msg, setMsg]=useState("")

    const getData=async()=>{
        const result=await axios.get("http://localhost:7500/accounttypes")
        setaccttypeOption(result.data);
    };

    useEffect(()=>{
        setTimeout(()=>{
            setMsg()
        },5000)
    },[msg]);


    useEffect(()=>{
        getData()
    }, []);

    const handleSubmit=async()=>{
        const payload={custid,fname,lname,password,repassword,accType}
          const result=await  axios.post("http://localhost:7500/addregister", payload);
         if(result.status==200 && setMsg(result.data)
         );
    }
    return(
        <div>
            <h1>Register New Account</h1>
            <Grid container spacing={2}>
                
                <Grid item xs={4}>
                    <TextField label="Customer First Name" variant="outlined" type="text" onChange={(e)=>setCustid(e.target.value)} fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Customer Last Name" variant="outlined" type="text" onChange={(e)=>setLname(e.target.value)} fullWidth/>
                </Grid>
                <Grid item xs={4}>
            <Select variant="outelined"    label="Benificiary Account Type" onChange={(val)=>setAcctype(val)} options={acctypeOption} />
               </Grid>

                <Grid item xs={4}>
                    <TextField label="Customer ID" variant="outlined" type="text" fullWidth onChange={(e)=>setCustid(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Current Password" variant="outlined" type="password" onChange={(e)=>setPassword(e.target.value)} fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Confirm Password" variant="outlined" type="password" onChange={(e)=>setrePassword(e.target.value)} fullWidth/>
                </Grid>
                <br /><br /><br />

                <Grid item xs={3}></Grid>
                    <Grid item xs={3}>
                        <Button onClick={handleSubmit} variant="contained" fullWidth>Submit</Button>
                    </Grid>

                    <Grid item xs={3}>
                        <Button variant="contained" fullWidth>Cancel</Button>
                    </Grid>
                
                    <Grid item xs={6}></Grid>

                    <Grid item xs={6}>{msg && <Alert severity="success">{msg}</Alert>}</Grid>

            </Grid>
        </div>
    )
}