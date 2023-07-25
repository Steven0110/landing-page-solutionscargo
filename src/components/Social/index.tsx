import { Button } from 'primereact/button'
import 'primeicons/primeicons.css'
import Link from 'next/link'
import "./Social.scss"; 

export default function Social() {
	return (
		<div className="social py-8 md:py-16 px-8 md:px-64">
			<div className="social__title text-center mb-4 md:mb-6">Síguenos en nuestras redes sociales</div>
			<div className="social__text text-center mb-8 md:mb-24">¡Estamos emocionados de conectarnos contigo y crecer juntos en este apasionante mundo del comercio nacional, internacional y transporte de alimentos perecederos!</div>
			<div className="social__icons">
				<Link href="https://www.linkedin.com/company/solutions-cargo-s-a-de-c-v/about/" className="social__icon ml" target="_blank">
					<i className="pi pi-linkedin text-5xl md:text-6xl mx-2 md:mx-8"></i>
				</Link>
				<Link href="https://api.whatsapp.com/send?phone=525517948196&text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s." className="social__icon" target="_blank">
					<i className="pi pi-whatsapp text-5xl md:text-6xl mx-2 md:mx-8"></i>
				</Link>
				<Link href="https://www.facebook.com/SOLUTIONSCARGO/?locale=es_LA" className="social__icon" target="_blank">
					<i className="pi pi-facebook text-5xl md:text-6xl mx-2 md:mx-8"></i>
				</Link>
				<Link href="https://www.instagram.com/solutions_cargo/" className="social__icon" target="_blank">
					<i className="pi pi-instagram text-5xl md:text-6xl mx-2 md:mx-8"></i>
				</Link>
			</div>
		</div>
	)
}