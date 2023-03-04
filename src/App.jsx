import tcs from './assets/images/Tata.png'
import KBlogo from './assets/images/KBlogo.svg'
import kubo from './assets/images/kubo.png'

import { Header, Hero, Comment, Project } from './components'
import { Form } from './Form'

export const App = () => {
	const info = [
		{
			title: '¡Hola a todos!',
			name: 'Soy David',
			description: 'Backend Developer que le encanta desarrollar y diseñar soluciones basadas en negocios digitales.',
			img_profile: 'https://hdvdavidv1.s3.us-east-2.amazonaws.com/developer.png',
			github:'https://hdvdavidv1.s3.us-east-2.amazonaws.com/icons/icon-github.svg',
			linkedin:'https://hdvdavidv1.s3.us-east-2.amazonaws.com/icons/icon-linkedin.svg',
			icon_down: 'https://hdvdavidv1.s3.us-east-2.amazonaws.com/icons/icons-down.svg',
			project: [
				{
					title: 'Backend Developer',
					short_description:
						'Desarrollo de servicios y integraciones de productos para Davivienda y Daviplata.',
					description: 'Aptitudes: NodeJs, Amazon Web Services (AWS), CI/CD, DinamoDb',
					status: 'active', 
					img: tcs
				},
				{
					title: 'FullStack Developer',
					short_description: 'Desarrollo de servicios y integraciones de productos para keybe.',
					description: 'Aptitudes: NestJS, VUEJS, MongoDb',
					status: 'inactive', 
					img: KBlogo
				},
				{
					title: 'FullStack Developer',
					short_description:
						'Desarrollo de servicios y integraciones de productos para aplicaciones de kubo.',
					description: 'Aptitudes: NodeJs, MYSQL , CD, VUEJS',
					status: 'inactive', 
					img: kubo
				}
			]
		}
	];

	return (
		<div>
			<Header />
			<div className="wrapper">
				<Hero data={ info } />
				<Comment icon={ info[0].icon_down } />

				{info.map((comment) => <Project key={comment} {...comment} />)}
				
		{/* 	<Form /> */}
			</div>
		</div>
	);
}

export default App;
