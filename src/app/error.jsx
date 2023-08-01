"use client"

import {useEffect} from "react";

export default function Error({error,reset}){
    useEffect(()=>{
        console.log(error);
    },[error]);

    return(
        <div className="mt-20 text-center">
            <h1>Oops! An error occured</h1>
            <button className="hover:text-amber-600" onClick={()=>reset()}>Try Again</button>
        </div>
    )
}