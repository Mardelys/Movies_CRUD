
export default function Home({movies}) {
   return (
     <>
     {
       movies.map(({_id ,title, year,duration, languaje, date,country })=>
       <div>
       key={_id},
       {title},
       {year},
       {duration},
       {languaje},
       {date},
       {country}
       </div>
       )
     }
     
     </>
   )
 }
   
 
 export async function getStaticProps() {
 
   // Call the fetch method and passing 
   // the API link
   const response = await fetch("/api");
 
   // Parse the JSON
   const data = await response.json();
 
   // Finally we return the result
   // inside props as Movies
   return {
       props: { allMovies: data.results },
   };
 }
 
 
 
 