import { useFormikContext } from "formik";
import { coordinateDTO } from "../Utilities/coordinates.module";
import Map from "../Utilities/Map";

export default function MapField(props:MapFieldProps){

    const {values} = useFormikContext<any>()
    
    function handleMapClick(coordinates:coordinateDTO){
        values[props.latField] = coordinates.lat;
        values[props.lngField] = coordinates.lng;
    }
    return(
        <Map 
            coordinates={props.coordinates}
            handleMapClick={handleMapClick}
        />
    )
}

interface MapFieldProps{
    coordinates:coordinateDTO[];
    latField:string;
    lngField:string;
}

MapField.defaultProps ={
    coordinates: []
}