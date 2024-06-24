
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({apiPath, title}) => {



  const {data : movies} = useFetch(apiPath );

  const pageTitle = useTitle(title);


  return (
    <main>
      <section className="max-w-7xl  ml-20 mr-20 py-7 ">
        <div className="flex justify-start flex-wrap other:justify-evenly ">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
