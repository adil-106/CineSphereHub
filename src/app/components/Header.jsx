import MenuItem from "./MenuItem";
import {AiFillHome,AiFillInfoCircle} from "react-icons/ai";
import Link from 'next/link';
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header(){
    return(
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
            <div className="flex">
                <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
                <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle}/>
            </div>
            <div className="flex items-center space-x-5">
                {/* Adding a Dark Mode Switch Component to the left of Home Page Icon */}
                <DarkModeSwitch/>
                <Link href="/">
                    <h2>
                        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg hover:bg-gray-900 hover:text-amber-500">IMDb</span>
                        <span className="text-xl hidden sm:inline px-1">Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    );
}
