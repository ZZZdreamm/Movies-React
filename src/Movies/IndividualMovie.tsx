import { movieDTO } from "./Movie.model.d";
import css from './IndividualMovie.module.css';
import { Link } from "react-router-dom";
export default function IndividualMovie(props:movieDTO){
    const buildLink = () => `/movies/${props.id}`;
    return(
        <div className={css.div}>
            <a href={buildLink()}>
                <img alt="Poster" src={props.poster} />
            </a>
            <p>
                <Link to={buildLink()}>{props.title}</Link>
            </p>

        </div>
    )
}