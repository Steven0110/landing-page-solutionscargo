import { Button } from 'primereact/button'
import 'primeicons/primeicons.css'
import Link from 'next/link'
import "./Social.scss"; 

export default function Social() {
	return (
		<div className="social py-8 md:py-16 px-8 md:px-64">
			<div className="social__title text-center mb-4 md:mb-6">Síguenos en nuestras redes sociales</div>
			<div className="social__text text-center mb-8 md:mb-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora beatae eos perspiciatis mollitia odit impedit animi, optio. Doloremque ipsam quas cumque, nostrum. Amet corrupti magnam recusandae alias sit nostrum!</div>
			<div className="social__icons">
				<Link href="#" className="social__icon ml">
					<i className="pi pi-linkedin text-5xl md:text-6xl mx-2 md:mx-8"></i>
				</Link>
				<Link href="#" className="social__icon">
					<i className="pi pi-whatsapp text-5xl md:text-6xl mx-2 md:mx-8"></i>
				</Link>
				<Link href="#" className="social__icon">
					<i className="pi pi-facebook text-5xl md:text-6xl mx-2 md:mx-8"></i>
				</Link>
				<Link href="#" className="social__icon">
					<i className="pi pi-instagram text-5xl md:text-6xl mx-2 md:mx-8"></i>
				</Link>
			</div>
		</div>
	)
}