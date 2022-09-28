import { Link } from "react-router-dom";
import { urlActors } from "../endpoints";
import IndexEntity from "../Utilities/IndexEntity";
import { actorDTO } from "./actors.model";

export default function IndexActors() {
  return (
    <>
      <IndexEntity<actorDTO>
        entityName="Actor"
        createURL="/actors/create"
        title="Actors"
        url={urlActors}
      >
        {(actors, buttons) => 
          <>
            <thead>
              <tr>
                    <th></th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {actors?.map((actor) => (
                <>
                <tr key={actor.id}>
                  <td>{buttons(`/actors/edit/${actor.id}`, actor.id)}</td>
                  <td>{actor.name}</td>
                </tr>
                </>
              ))}
            </tbody>
          </>
        }
      </IndexEntity>
    </>
  );
}
