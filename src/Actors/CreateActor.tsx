import axios from "axios";
import { validateYupSchema } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { urlActors } from "../endpoints";
import DisplayErrors from "../Utilities/DisplayErrors";
import { convertActorToFormData } from "../Utilities/FormDataUtils";
import ActorForm from "./ActorForm";
import { actorCreationDTO } from "./actors.model";

export default function CreateActor(){
    const [errors,setErrors] = useState<string[]>([]);
    const navigate = useNavigate();
    async function create(actor:actorCreationDTO){
        try{
           const formData = convertActorToFormData(actor);
           await axios({
                method:'post',
                url:urlActors,
                data:formData,
                headers:{'Content-Type': 'multipart/form-data'}
           })
           navigate('/actors');
        }
        catch(error){
            console.log(error);
            if(error && error.response){
                setErrors(error.response.data);
            }
          }
    }
    return(
        <>
            <h3>Create Actor</h3>
            <DisplayErrors errors={errors}/>
            <ActorForm model={{name:'', dateOfBirth: undefined}}
             onSubmit={async values => await create(values)}></ActorForm>
        </>
    )
}