import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./Movie.model";
import * as Yup from "yup";
import Button from "../Utilities/Button";
import { Link } from "react-router-dom";
import TextField from "../Forms/TextField";
import DateField from "../Forms/DateField";
import ImageField from "../Forms/ImageField";
import CheckboxField from "../Forms/CheckboxField";
import MultipleSelector, {
  multipleSelectorModel,
} from "../Forms/MultipleSelector";
import { useState } from "react";
import { genreDTO } from "../Genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.module";
import TypeaheadActors from "../Forms/TypeaheadActors";
import { actorMovieDTO } from "../Actors/actors.model";
import MarkdownField from "../Forms/MarkdownField";
export default function MovieForm(props: MovieFormProps) {
  const [selectedGenres, setSelectedGenres] = useState(
    mapToModel(props.selectedGenres)
  );
  const [nonSelectedGenres, setNonSelectedGenres] = useState(
    mapToModel(props.nonSelectedGenres)
  );

  const [selectedMovieTheaters, setSelectedMovieTheaters] = useState(
    mapToModel(props.selectedMovieTheaters)
  );
  const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState(
    mapToModel(props.nonSelectedMovieTheaters)
  );

  const [selectedActors,setSelectedActors] = useState(props.selectedActors);

  function mapToModel(
    items: { id: number; name: string }[]
  ): multipleSelectorModel[] {
    return items.map((item) => {
      return { key: item.id, value: item.name };
    });
  }

  return (
    <Formik
      initialValues={props.model}
      onSubmit={(values, actions) => {
        values.genresIds = selectedGenres.map((item) => item.key);
        values.movieTheatersIds = selectedMovieTheaters.map((item) => item.key);
        values.actors = selectedActors;
        props.onSubmit(values, actions);
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("This field is required")
          .firstLetterUpperCase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Title" field="title" />
          <CheckboxField displayName="In Theaters" field="inTheaters" />
          <TextField displayName="Trailer" field="trailer" />
          <DateField displayName="Release Date" field="releaseDate" />
          <ImageField
            displayName="Poster"
            field="poster"
            imageURL={props.model.posterURL}
          />

          <MarkdownField displayName="Summary" field="summary"/>

          <MultipleSelector
            displayName="Genres"
            nonSelected={nonSelectedGenres}
            selected={selectedGenres}
            onChange={(selected, nonSelected) => {
              setSelectedGenres(selected);
              setNonSelectedGenres(nonSelected);
            }}
          />

          <MultipleSelector
            displayName="Movie Theaters"
            nonSelected={nonSelectedMovieTheaters}
            selected={selectedMovieTheaters}
            onChange={(selected, nonSelected) => {
              setSelectedMovieTheaters(selected);
              setNonSelectedMovieTheaters(nonSelected);
            }}
          />

          <TypeaheadActors displayName="Actors" actors={selectedActors}
          onAdd={actors =>{
                setSelectedActors(actors);
          }}
          onRemove={actor =>{
            const actors = selectedActors.filter(x => x !== actor);
            setSelectedActors(actors);
          }}
          listUI={(actor:actorMovieDTO) =>
            <>
                {actor.name} / <input placeholder="Character" type="text"
                value={actor.character}
                onChange={e=>{
                    const index =selectedActors.findIndex(x => x.id === actor.id);

                    const actors = [...selectedActors]
                    actors[index].character = e.currentTarget.value;
                    setSelectedActors(actors);
                }} />
            </>
        }
          />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save changes
          </Button>
          <Link className="btn btn-secondary" to="/movietheaters">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface MovieFormProps {
  model: movieCreationDTO;
  onSubmit(
    values: movieCreationDTO,
    actions: FormikHelpers<movieCreationDTO>
  ): void;
  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];
  selectedMovieTheaters: movieTheaterDTO[];
  nonSelectedMovieTheaters: movieTheaterDTO[];
  selectedActors:actorMovieDTO[];
}
