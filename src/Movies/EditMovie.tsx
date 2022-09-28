import { Link } from "react-router-dom";
import { actorMovieDTO } from "../Actors/actors.model";
import { genreDTO } from "../Genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.module";
import MovieForm from "./MovieForm";

export default function EditMovie(){
    const nonSelectedGenres:genreDTO[] = [{id:2,name:'Drama'}]
    const selectedGenres:genreDTO[] = [{id:1,name:'Comedy'}]

    const nonSelectedMovieTheaters:movieTheaterDTO[] = [{id:2,name:'Agora'}]
    const selectedMovieTheaters:movieTheaterDTO[] = [{id:1,name:'Sambil'}]

    const selectedActors:actorMovieDTO[] = [{
        id: 1,
      name: "Kacper",
      character: "Koks",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg",
    }]
    return(
        <>
            <h3>Edit movie</h3>
            <MovieForm model={{title: 'Toy Story',inTheaters:true,trailer:'url',
            releaseDate:new Date('2019-08-07T00:00:00')}} 
            onSubmit={values => console.log(values)}
            nonSelectedGenres={nonSelectedGenres}
            selectedGenres={selectedGenres}
            nonSelectedMovieTheaters={nonSelectedMovieTheaters}
            selectedMovieTheaters={selectedMovieTheaters}
            selectedActors={selectedActors}
            />
        </>
    )
}