import Card from "./Card";

export default function Results({results}){
    console.log(results);
    return(
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 px-4">
            {results.map((result) => {
                return <Card key={result.id} result={result}/>
            })}
        </div>
    );
}