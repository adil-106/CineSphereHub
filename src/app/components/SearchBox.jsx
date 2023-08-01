"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox(){
    const [search,setSearch] = useState("");
    const router = useRouter();

    function handleSubmit(event){
        event.preventDefault(); //Avoids refreshing the page
        if(!search){
            return;
        }
        router.push(`/search/${search}`);
        setSearch("");
    }
    
    return(
        <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5">
            <input value={search} onChange={(event)=>{setSearch(event.target.value)}} type="text" placeholder="Search Keywords..." className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent " />
            <button disabled={!search} type="submit" className="text-amber-600 disabled:text-gray-400 ">Search</button>
        </form>
    );
}