'use client';

import './Banner.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import ContactForm from '../ContactForm'

export default function Banner() {

	const [windowSize, setWindowSize] = useState([0,0])

	useEffect(() => {
			const handleWindowResize = () => setWindowSize([window.innerWidth, window.innerHeight])

			handleWindowResize()
			window.addEventListener('resize', handleWindowResize)

			return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 banner">
				<div className="px-4 md:px-28 py-14">
					<div className="text-center md:text-left">
						<Image
							src="logo.png"
							alt="Solutions Cargo Logo"
							className="inline-block"
							width={300}
							height={200}
							sizes="(max-width: 640px) 150, 300"
							/>
					</div>
					<div className="banner__title mt-12 text-center md:text-left">
						Tu socio en la exportación, importaciÓn y logÍstica
					</div>
					<div className="banner__text mt-8 text-center md:text-left">
						Agencia de Carga Internacional enfocada en brindar una solución en logística para empresas dedicadas a la importación y exportación
					</div>
				</div>
				{windowSize[0] > 768 && <ContactForm/>}
			</div>
			{windowSize[0] <= 768 &&
			<div className="mobile-form">
				<ContactForm/>
			</div>}
		</div>
	)
}