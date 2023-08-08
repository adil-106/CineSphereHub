import Link from "next/link";
export default function About(){
    return(
        <div className="mx-auto max-w-6xl space-y-4 px-6">
            <h1 className="text-2xl font-medium text-amber-500 ">About</h1>
            <p className="text-justify">
                This is a movie database website which resembles IMDb. This responsive web application is built using principles of ReactJS incorporating a component-based architecture and utilizing a web-framework based on React named NextJS. TailwindCSS is utilized to build a compelling UI thereby, adding interactive and responsiveness. The website consits of various functionalities including dark and ligit mode switching, search capabilites which are built using React Hooks such as useState, useRouter and useEffect. The website switches dynamically between client side rendering (CSR) whenever it uses useContext and Server Side rendering(SSR). This also incorporates the use of react-icons, react-themes, and next-navigation for fast and robust page rendering.  ~ Created by <Link className="font-semibold underline text-amber-500 hover:text-gray-50" href="https://www.linkedin.com/in/adil-iqbal-ai">Adil Iqbal.</Link>
            </p>
            
        </div>
    )
}