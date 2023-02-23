export const Hero = ({ data }) => {
	console.log(data);
	return (
		<section aria-label="main" className="hero" id="main">
			
				<div className="hero-image">
				<a target="_blank" className="button-icon-foto" href="https://platzi.com/p/bdavidegonzalez/">
					<img src={data[0].img_profile} width="338" height="330" alt="" />
					</a>
				</div>
			
			<div className="hero-description">
				<h1>
					<span>{data[0].title}</span>
					<span>{data[0].name}</span>
				</h1>
				<p>{data[0].description}</p>
				<div className="social">
					<a target="_blank" className="button-icon" href="https://github.com/bdavidegonzalez">
						<img src={data[0].github} />
					</a>
					<a
						target="_blank"
						className="button-icon"
						href="https://www.linkedin.com/in/david-gonzalez-69097016a/"
					>
						<img src={data[0].linkedin} />
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
