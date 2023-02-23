export const ProjectGrid = ({title, short_description, description, img}) => {

  console.log('array data', title);

  return (
    <div className="project" id="project">
    {/*  <div className="project-image">
          <img src={ img } className="img-logo-experience" alt="" />
  </div> */}
      <div className="project-description">
            <h2>{ title }</h2>
            <p>{ short_description }</p>
            <p>{ description }</p>
        </div>
      </div>
  )
}

