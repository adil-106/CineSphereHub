"use client";

import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function NavbarItem({title,params}){
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");

    return(
        <div>
            {/* Adding dynamic link */}
            {/* Adding dynamic styling to this component - showing underline if and only if the tab is open by checking the params value */}
            <Link href={`/?genre=${params}`} className={`m-4 hover:text-amber-600 font-semibold p-2 ${genre && genre===params && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"}`}>
                {title}
            </Link>
        </div>
    )
}