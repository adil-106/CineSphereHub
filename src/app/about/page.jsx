import Link from "next/link";
export default function About(){
    return(
        <div className="mx-auto max-w-6xl space-y-4 px-6">
            <h1 className="text-2xl font-medium text-amber-500">About</h1>
            <p>This is a movie database website based on React.js and its framework NextJS. The UI is built with the use of TailwindCSS a CSS framework. 
                The website consits of various functionalities including dark and ligit mode switching, search capabilites. The website switches dynamically between client side rendering whenever it makes the usage of React hooks and server side rendering.
                This also incorporates the use of react icons, react themes and next-navigation ~ react router for fast and robust rendering ~ Created by <Link className="font-semibold underline" href="https://www.linkedin.com/in/adil-iqbal-ai">Adil Iqbal.</Link>
            </p>
            
        </div>
    )
}