import { Form, Formik, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextField from "../Forms/TextField";
import Button from "../Utilities/Button";
import { genreCreationDTO } from "./genres.model";

export default function GenreForm(props:genreFormProps){
    const navigate = useNavigate();
    return(
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required")
            .firstLetterUpperCase(),
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField field="name" displayName="Name" />

            <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
            <Link className="btn btn-secondary" to="/genres">
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    )
}
interface genreFormProps{
    model:genreCreationDTO;
    onSubmit(values:genreCreationDTO, action: FormikHelpers<genreCreationDTO>):void
}