export const Project = ({project}) => {

/*   {
    project.map(( data ) => (
      <ProjectGrid  key={ data } { ...data } />
    ))
} */

console.log('Project jsx', project);

  return (
    <>
{/*     {
      project.map(( data ) => ( */}
        
          <div id="project" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#project" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#project" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#project" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="carousel-caption-experince d-none d-md-block">
                <h5>{ project[0].title }</h5>
                <p>{ project[0].short_description }</p>
                <p>{ project[0].description }</p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-caption-experince d-none d-md-block">
                <h5>{project[1].title}</h5>
                <p>{project[1].short_description}</p>
                <p>{project[1].description}</p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-caption-experince d-none d-md-block">
                <h5>{project[2].title}</h5>
                <p>{project[2].short_description}</p>
                <p>{project[2].description}</p>
              </div>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#project" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#project" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
{/*         ))
    } */}
    </>
  )
  
}

