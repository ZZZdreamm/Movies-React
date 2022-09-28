import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import IndexGenres from "./Genres/IndexGenres";
import LandingPage from "./Movies/LandingPage";
import Menu from "./Menu";
import IndividualMovies from "./Movies/IndividualMovie";
import { landingPageDTO, movieDTO } from "./Movies/Movie.model.d";
import MoviesList from "./Movies/MoviesList";
import Button from "./Utilities/Button";
import routes from "./route-config";
import CreateGenre from "./Genres/CreateGenre";
import EditGenre from "./Genres/EditGenre";
import EditActor from "./Actors/EditActor";
import CreateActor from "./Actors/CreateActor";
import IndexActors from "./Actors/IndexActors";
import IndexMovieTheaters from "./movieTheaters/IndexMovieTheaters";
import CreateMovieTheater from "./movieTheaters/CreateMovieTheater";
import EditMovieTheater from "./movieTheaters/EditMovieTheater";
import CreateMovie from "./Movies/CreateMovie";
import EditMovie from "./Movies/EditMovie";
import FilterMovies from "./Movies/FilterMovies";
import ConfigureValidations from "./Validations";
import MovieDetails from "./Movies/MovieDetails";

ConfigureValidations();

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="genres" element={<IndexGenres />} />
          <Route path="/genres/create" element={<CreateGenre />} />
          <Route path="/genres/edit/:id" element={<EditGenre />} />

          <Route path="/actors" element={<IndexActors />} />
          <Route path="/actors/create" element={<CreateActor />} />
          <Route path="/actors/edit/:id" element={<EditActor />} />

          <Route path="/movietheaters" element={<IndexMovieTheaters />} />
          <Route path="/movietheaters/create" element={<CreateMovieTheater />} />
          <Route path="/movietheaters/edit/:id" element={<EditMovieTheater />} />

          <Route path="/movies/create" element={<CreateMovie />} />
          <Route path="/movies/edit/:id" element={<EditMovie />} />
          <Route path="/movies/filter" element={<FilterMovies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <footer className="bd-footer py-5 mt-5 bg-light">
            <div className="container">
                  React Movies
            </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
