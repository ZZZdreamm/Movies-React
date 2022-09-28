import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { urlMovieTheaters } from "../endpoints";
import DisplayErrors from "../Utilities/DisplayErrors";
import { movieTheaterCreationDTO } from "./movieTheater.module";
import MovieTheaterForm from "./MovieTheaterForm";

export default function CreateMovieTheater(){
    const navigate = useNavigate();
    const [errors,setErrors] = useState<string[]>([]);
    async function create(movieTheater:movieTheaterCreationDTO) {
        console.log(movieTheater);
        try{
           
            await axios.post(urlMovieTheaters,movieTheater);
            console.log("CONTRY ROADSSS")
            navigate("/movietheaters");
        }
        catch(error){
            console.log(error);
            if(error && error.response){
                setErrors(error.response.data);
                console.log("fk");
            }
          }
    }
    return(
        <>
            <h3>Create Movie Theater</h3>
            <DisplayErrors errors={errors}/>
            <MovieTheaterForm
                model={{name:''}}
                onSubmit={async values => await create(values)}
            />
        </>
    )
}