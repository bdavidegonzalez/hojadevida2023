import developer from './assets/images/developer.png';
import github from './assets/icons/icon-github.svg';
import linkedin from './assets/icons/icon-linkedin.svg';
import icons_down from './assets/icons/icons-down.svg';
import tcs from './assets/images/Tata.png';
import KBlogo from './assets/images/KBlogo.svg';
import kubo from './assets/images/kubo.png';

import { Header, Hero, Comment, Project } from './components';

function App() {
	const info = [
		{
			title: '¡Hola a todos!',
			name: 'Soy David',
			description: 'Backend Developer que le encanta desarrollar y diseñar soluciones basadas en negocios digitales.',
			project: [
				{
					title: 'FullStack Developer',
					short_description:
						'Desarrollo de servicios y integraciones de productos para Davivienda y Daviplata.',
					description: 'Aptitudes: NodeJs, Amazon Web Services (AWS), CD',
					img: tcs
				},
				{
					title: 'FullStack Developer',
					short_description: 'Desarrollo de servicios y integraciones de productos para keybe.',
					description: 'Aptitudes: NestJS, VUEJS',
					img: KBlogo
				},
				{
					title: 'FullStack Developer',
					short_description:
						'Desarrollo de servicios y integraciones de productos para aplicaciones de kubo.',
					description: 'Aptitudes: NodeJs, MYSQL , CD, VUEJS',
					img: kubo
				}
			]
		}
	];

	return (
		<div>
			<Header />
			<div className="wrapper">
				<Hero banner={developer} github={github} linkedin={linkedin} data={info} />
				<Comment icon={icons_down} />

				{info.map((comment) => <Project key={comment} {...comment} />)}
			</div>
		</div>
	);
}

export default App;
