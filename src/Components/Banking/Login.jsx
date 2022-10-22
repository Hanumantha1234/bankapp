import React, { useState } from "react";
import { Grid,TextField, Button} from "@mui/material";
import { useDispatch} from "react-redux";
import axios from "axios";

export const Login=()=>{
    const[custid, setCustid]=useState(0)
    const[password, setPassword]=useState("");
    const dispatch=useDispatch();

    const handleAdd=async()=>{
const payload={
    custid,
    password
};

const result=await axios.post("http://localhost:7500/login", payload);
dispatch({
    type:"loginInfo",
    payload:result.data
})
console.log(result.data);
    }
    return(
    <React.Fragment>
   <Grid container spacing={4}>
    <Grid item xs={3}>
    <TextField variant="outlined" label="Customer ID" onChange={(e)=>setCustid(e.target.value)} fullWidth />
    </Grid>
    
    <Grid item xs={3}>
    <TextField variant="outlined" label="password" type="password" onChange={(e)=>setPassword(e.target.value)} fullWidth />
    </Grid>

    <Grid item xs={3}>
        <Button variant="contained" onClick={handleAdd} fullWidth>Login</Button>
    </Grid>
    <Grid item xs={3}>
        <Button variant="contained" fullWidth>Cancel</Button>
    </Grid>

   </Grid>
    </React.Fragment>
    )
}