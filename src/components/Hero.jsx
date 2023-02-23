export const Hero = ({ banner, github, linkedin, data }) => {
	console.log(data[0])
	return (
		<section aria-label="main" className="hero" id="main">
			<div className="hero-image">

				{/*        
                    <a target="_blank" className="button-icon-foto" href="https://platzi.com/p/bdavidegonzalez/">
                        <h2 className="title-white">Mis certificaciones de platzi. </h2> 
                    </a>
                */}

				<img src={banner} width="338" height="330" alt="" />
			</div>

			<div className="hero-description">
				<h1>
					<span>{ data[0].title }</span>
					<span>{ data[0].name }</span>
				</h1>
				<p>{ data[0].description }</p>
				<div className="social">
					<a target="_blank" className="button-icon" href="https://github.com/bdavidegonzalez">
						<img src={github} />
					</a>
					<a
						target="_blank"
						className="button-icon"
						href="https://www.linkedin.com/in/david-gonzalez-69097016a/"
					>
						<img src={linkedin} />
					</a>
				</div>
                {/*				
                    <a href="#" className="button">
                            Descargar Hoja de vida.
                    </a> 
                */}
			</div>
		</section>
	);
};
