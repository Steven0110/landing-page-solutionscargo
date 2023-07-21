'use client'

import { Carousel } from 'primereact/carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss"; 
import Slider from "react-slick";

export default function SliderSection() {

	interface Settings {
		dots: boolean,
		arrows: boolean,
		infinite: boolean,
		speed: number,
		slidesToShow: number,
		slidesToScroll: number
	}

	const settings: Settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
	}

	return (
		<div className="slider grid grid-cols-1">
			<Slider {...settings}>
				<div className="slider__slide px-4 md:px-64" style={{backgroundImage: 'url(/bg-perishable.png)'}}>
					<div className="slide__title mb-4 md:mb-8 mt-4 md:mt-12">Transporte Refrigerado</div>
					<div className="slide__text mb-4 md:mb-24 relative">&quot;Expertos en carga perecedera y proyectos agroalimentarios. Coordinamos envíos nacionales e internacionales, y brindamos soporte completo para minimizar riesgos y costos en el transporte de tus productos&quot;</div>
				</div>
			</Slider>
		</div>
	)
}