"use client"

import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkModeSwitch(){

    const {systemTheme, theme, setTheme} = useTheme();

    // Using state to check whether the page has been mounted or not.
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{setMounted(true)},[]);

    const currentTheme = theme === "system" ? systemTheme : theme;
    
    return(
        <div>
            {/* Check currentTheme, shows sun if dark else shows moon */}
            {/* Also applying these effects only when the mounted state === true */}

            { mounted && 
            (currentTheme === "dark" ? 
            (<BsFillSunFill className="text-xl hover:text-amber-500 cursor-pointer" onClick={()=> setTheme("light")}/>) : 
            (<BsFillMoonFill className="text-xl hover:text-amber-500 cursor-pointer" onClick={()=> setTheme("dark")}/>))}
        </div>
    );
}