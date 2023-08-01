import Link from "next/link";
import Image from "next/image";
import {AiFillLike} from "react-icons/ai"

export default function Card({result}){
    return(<div className="cursor-pointer p-3 hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-2 transition-shadow duration-200 group">
            <Link href={`/movie/${result.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} style={{maxWidth:"100%",height:"auto"}} width={500} height={300} className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200" placeholder="blur" blurDataURL="/loader.svg" alt="Image Not Found"></Image>
                <div className="p-2">
                    <p className="line-clamp-2 text-md">{result.overview}</p>
                    <h2 className="truncate text-lg font-bold">{result.original_title || result.original_name}</h2>
                    <p className="flex items-center">{result.release_date || result.first_air_date}<AiFillLike className="h-5 mr-1 ml-3"/>{result.vote_count}</p>
                </div>
            </Link>
        </div>);
}