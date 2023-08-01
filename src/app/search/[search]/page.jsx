import Results from "@/app/components/Results";

export default async function SearchPage({params}){
    
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.search}&language=en-US`);
    
    if(!res.ok){
        throw new Error("Error in fetching data");
    }

    const data = await res.json();

    const results = data.results;
    
    return(
        <div>
            {results && results.length === 0 && 
            (<h1 className="text-center pt-6">No Matching Results</h1>)}

            {results && <Results results={results}/>}
        </div>
    );
}