import React, {useState} from "react";
import { Tabs, Tab } from "@mui/material";
import { Benificiary } from "./Benficiary";
import { Transaction } from "./Transaction";
import { Transfer } from "./Transfer";
import { AccountType } from "./AccountType";

export const Banking=()=>{
    const[selected, setSelected]=useState("transaction");
    return(
        <React.Fragment>
     <Tabs value={selected} onChange={(e,val)=>setSelected(val)} >
        <Tab value="transaction" label="Transaction" />
        <Tab value="transfer" label="Transfer" />
        <Tab value="benificiary" label="Benificiary" />
        <Tab value="accounttypes" label="AccountType" />
     </Tabs>
     {selected==="transaction" && <Transaction/>}
     {selected==="transfer" && <Transfer/>}
     {selected==="benificiary" && <Benificiary/>}
     {selected==="accounttypes" && <AccountType/>}
        </React.Fragment>
    )
}