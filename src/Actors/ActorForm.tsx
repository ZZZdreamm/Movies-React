import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../Forms/TextField";
import Button from "../Utilities/Button";
import * as Yup from "yup";
import DateField from "../Forms/DateField";
import ImageField from "../Forms/ImageField";
import MarkdownField from "../Forms/MarkdownField";
import { actorCreationDTO } from "./actors.model";

export default function ActorForm(props:actorFormProps){
    return(
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name:Yup.string().required("This field is required")
            .firstLetterUpperCase(),
            dateOfBirth: Yup.date().nullable().required('This field is required')
        })}
        >
            {(formikProps) => 
                <Form>
                    <TextField field='name' displayName="Name" />
                    <DateField displayName="Date of Birth" field="dateOfBirth"/>
                    <ImageField displayName="Picture" field="picture" 
                    imageURL={props.model.pictureURL}/>
                    <MarkdownField displayName="Biography" field="biography"/>

                    <Button disabled={formikProps.isSubmitting}
                    type='submit'
                    >Save changes</Button>
                    <Link to="/actors" className="btn btn-secondary">Cancel</Link>
                </Form>
            }
        </Formik>
    )
}

interface actorFormProps{
    model:actorCreationDTO;
    onSubmit(values:actorCreationDTO, action: FormikHelpers<actorCreationDTO>):void;
}