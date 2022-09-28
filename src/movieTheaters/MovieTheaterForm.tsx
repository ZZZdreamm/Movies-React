import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../Forms/TextField";
import Button from "../Utilities/Button";
import { movieTheaterCreationDTO } from "./movieTheater.module";
import * as Yup from "yup";
import Map from "../Utilities/Map";
import MapField from "../Forms/MapField";
import { coordinateDTO } from "../Utilities/coordinates.module";
export default function MovieTheaterForm(props:movieTheaterForm){
    function trasnformCoordinates() :coordinateDTO[] | undefined{
        if (props.model.latitude && props.model.longitude) {
            const response: coordinateDTO = {lat: props.model.latitude, lng:props.model.longitude}
            return [response];
        }
        return undefined;
    }

    return(
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name:Yup.string().required("This field is required")
                .firstLetterUpperCase()
            
            })}
        >
            {(formikProps) =>(
                <Form>
                    <TextField displayName="Name" field="name"/>

                    <div style={{marginBottom:'1rem'}}>
                        <MapField latField="latitude" lngField="langitude"
                        coordinates={trasnformCoordinates()}/>
                    </div>


                    <Button disabled={formikProps.isSubmitting} type="submit">Save changes</Button>
                    <Link className="btn btn-secondary" to="/movietheaters">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieTheaterForm{
    model:movieTheaterCreationDTO;
    onSubmit(values:movieTheaterCreationDTO, actions:FormikHelpers<movieTheaterCreationDTO>): void
}