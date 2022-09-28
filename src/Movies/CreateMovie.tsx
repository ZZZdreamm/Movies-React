import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { urlMovies } from "../endpoints";
import { genreCreationDTO, genreDTO } from "../Genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.module";
import DisplayErrors from "../Utilities/DisplayErrors";
import { convertMovieToFormData } from "../Utilities/FormDataUtils";
import Loading from "../Utilities/Loading";
import { movieCreationDTO, moviesPostGetDTO } from "./Movie.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {
  const [errors,setErrors] = useState<string[]>([]);
  const [nonSelectedGenres, setNonSelectedGenres] = useState<genreDTO[]>([]);
  const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState<
    movieTheaterDTO[]
  >([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${urlMovies}/postget`)
      .then((response: AxiosResponse<moviesPostGetDTO>) => {
        setNonSelectedGenres(response.data.genres);
        setNonSelectedMovieTheaters(response.data.movieTheaters);
        setLoading(false);
      });
  },[]);

  async function create(movie:movieCreationDTO) {
    try{
        const formData = convertMovieToFormData(movie);
        const response = await axios({
          method:'post',
          url:urlMovies,
          data:formData,
          headers:{"Content-Type":"multipart/form-data"}
        });
        console.log(response.data);
        navigate(`/movies/${response.data}`)

    }catch(error){
      console.log(error.response);
      setErrors(error.response.data);
    }
  }

  return (
    <>
      <h3>Create Movie</h3>
      <DisplayErrors errors={errors}/>
      {loading ? (
        <Loading />
      ) : (
        <MovieForm
          model={{ title: "", inTheaters: false, trailer: "" }}
          onSubmit={async (values) => await create(values)}
          nonSelectedGenres={nonSelectedGenres}
          selectedGenres={[]}
          nonSelectedMovieTheaters={nonSelectedMovieTheaters}
          selectedMovieTheaters={[]}
          selectedActors={[]}
        />
      )}
    </>
  );
}
