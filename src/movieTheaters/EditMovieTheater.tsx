import { Link } from "react-router-dom";
import { urlMovieTheaters } from "../endpoints";
import EditEntity from "../Utilities/EditEntity";
import { movieTheaterCreationDTO, movieTheaterDTO } from "./movieTheater.module";
import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater(){
    return(
       <EditEntity<movieTheaterCreationDTO, movieTheaterDTO>
            url={urlMovieTheaters}
            indexURL="/movietheaters"
            entityName="Movie Theater"

        >
            {(entity, edit) => 
                <MovieTheaterForm model={entity}
                    onSubmit={async values => await edit(values)}
                />
            }

       </EditEntity>
    )
}