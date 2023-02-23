import { Fragment } from "react";
import { ProjectGrid  } from "./ProjectGrid";

export const Project = ({project}) => {

  console.log('array project', project);

  return (
   <Fragment>
    {
        project.map(( data ) => (
          <ProjectGrid  key={ data } { ...data } />
        ))
    }
  </Fragment>
  )
}

