import { actorMovieDTO } from "../Actors/actors.model";
import { genreDTO } from "../Genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.module";

export interface movieDTO{
    id:number;
    title:string;
    poster:string;
    inTheaters:boolean;
    trailer:string;
    summary?:string;
    releaseDate:Date;
    genres:genreDTO[];
    movieTheaters:movieTheaterDTO[];
    actors:actorMovieDTO[];

}

export interface movieCreationDTO{
    movieTheatersIds?: number[];
    title:string;
    inTheaters:boolean;
    trailer:string;
    summary?:string;
    releaseDate?:Date;
    poster?:File;
    posterURL?:string;
    genresIds?:number[];
    movieTheatersIds?:number[];
    actors?:actorMovieDTO[];
}


export interface landingPageDTO{
    inTheaters?:movieDTO[];
    upcomingReleases?:movieDTO[];
}

export interface moviesPostGetDTO{
    genres:genreDTO[];
    movieTheaters:movieTheaterDTO[];
}