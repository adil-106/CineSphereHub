"use client"

import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"
import { useTheme } from "next-themes";

export default function DarkModeSwitch(){

    const {systemTheme, theme, setTheme} = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;
    

    return(
        <div>
            {/* Check currentTheme, shows sun if dark else shows moon */}
            {currentTheme === "dark" ? 
            (<BsFillSunFill className="text-xl hover:text-amber-500 cursor-pointer" onClick={()=> setTheme("light")}/>) : 
            (<BsFillMoonFill className="text-xl hover:text-amber-500 cursor-pointer" onClick={()=> setTheme("dark")}/>)}
        </div>
    );
}