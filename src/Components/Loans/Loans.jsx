import React, {useEffect} from "react";

export const Loans=()=>{

  useEffect(()=>{
    console.log("Loan method got Destroyed")
    // return()=>console.log("Loan components get Destrpyed")
  })
    return(
        <React.Fragment>
          <h1>Loans</h1>
        </React.Fragment>
    )
}