import { useState, useEffect } from 'react'
import Movie from "./Movie";

function Home({ user }){
    const [movieList, setMovieList] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch("/movies").then((r) => {
            if (r.ok) {
              r.json().then((movies) => {
                setMovieList(movies)
              });
            } else {
                r.json().then(json => setErrors(json.errors))
            }
        });
      }, []);

    

    return(
        user ? (<div>
            <h2>Favorite Movies</h2>
            {movieList.map((movie) => (
                <Movie image={movie.image} name={movie.name} id={movie.id} user={user}/>
            ))}
        </div>) : (
            <h2>Please log in or create an account.</h2>
        )
    )
}

export default Home;