'use client'

import './Introduction.scss'

export default function Introduction() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 introduction">
			<div className="px-4 md:px-28">
				<div className="introduction__title mb-6 md:mb-12 mt-6 md:mt-24 md:mt-0">
					Optimiza tu comercio internacional de alimentos perecederos con nuestro servicio de excelencia
				</div>
				<div className="introduction__paragraph mb-6 md:mb-12">
					Somos una Agencia de Carga Internacional que te proporciona una Solución Integral para tus necesidades, teniendo todos los servicios incorporados para brindarte el concepto de una sola ventana para un mejor control
				</div>
				<div className="introduction__paragraph mb-6 md:mb-12">
					Contamos con <strong>15 años de experiencia</strong> y estamos enfocados en brindarte una Solución real en la transportación y logística para todas las empresas dedicadas a la importación y exportación de bienes.
				</div>
			</div>
		</div>
	)
}