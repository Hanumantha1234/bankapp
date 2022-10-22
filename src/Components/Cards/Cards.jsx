import React, {useEffect} from "react";


export const Cards=()=>{

    useEffect(()=>{
        console.log("Cards got Re-Birth");
        // return()=>console.log("Cards components get Destrpyed")
    },[])
    return(
        <React.Fragment>
       <h1>Cards</h1>
        </React.Fragment>
    )
}