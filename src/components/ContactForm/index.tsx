'use client';

import './ContactForm.scss'
import { useState, useRef, useCallback } from 'react'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import { Formik, Form, ErrorMessage } from 'formik';
import ReCAPTCHA from "react-google-recaptcha";
export default function ContactForm() {

	interface Values {
		name: string,
		email: string,
		phone: string|number,
		message: string,
		service: string,
		captcha: string
	}
	interface Service {
		name: string,
		value: string
	}

	const [ disabled, setDisabled ] = useState<boolean>(false)
	const [ service, setService ] = useState<string>('')

	const services: Service[] = [
		{name: 'Importación aérea', value: 'Importación aérea'},
		{name: 'Exportación aérea', value: 'Exportación aérea'},
		{name: 'Importación marítima', value: 'Importación marítima'},
		{name: 'Transporte terrestre seco', value: 'Transporte terrestre seco'},
		{name: 'Transporte terrestre refrigerado', value: 'Transporte terrestre refrigerado'},
		{name: 'Otro', value: 'Otro'},
	]

	interface RecaptchaRefType {
		getValue: () => string | null
	}

	const recaptchaRef = useRef<RecaptchaRefType | null>(null)
	const toast = useRef<Toast>(null)

	const assignRef = useCallback((ref: ReCAPTCHA | null) => {
		recaptchaRef.current = ref as RecaptchaRefType | null;
	}, []);


	function validateForm(values: Values) {
		const errors = {} as Values
		let count: number = 0

		if( !values.email )
			errors.email = 'El correo electrónico es requerido', count++
		else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) )
			errors.email = 'El correo eletrónico es inválido', count++
		
		if( !values.name )
			errors.name = 'El nombre es requerido', count++

		if( !values.phone )
			errors.phone = 'El teléfono es requerido', count++

		if( !recaptchaRef.current?.getValue() )
			errors.captcha = 'El captcha es requerido', count++

		return count > 0 ? errors : {}
	}

	function submitForm(values: Values, { setSubmitting }: { setSubmitting: Function } ) {
		fetch('https://public-api.solutionscargo.com.mx/save-landing-data/', {
			'method': 'POST',
			'mode': 'cors',
			'headers': {
				'Content-Type': 'application/json',
				'x-api-key': 'DcLfVaW0q38k0NoVygp8d2QuTYAiftz78kI1XfH1'
			},
			'body': JSON.stringify({
				name: values.name,
				email: values.email,
				message: values.message,
				service: service,
				phone: values.phone
			})
		})
		.then(response => response.json())
		.then( result => {
			console.log( result )

			toast.current?.show({severity: 'success', summary: 'Ok', detail: 'Tu información se ha enviado correctamente.'})
			setSubmitting( false )
			setDisabled(true)
		})
		.catch(err => {
			console.error( err )
			toast.current?.show({severity: 'error', summary: 'Error', detail: 'Hubo un error al enviar tu información, por favor vuelva a intentarlo.'})
			setSubmitting( false )
		})
	}

	return (
		<div className="px-4 md:px-28 py-0 md:py-40 relative">
			<Toast ref={toast} position="center"/>	
			<Formik
				initialValues={{name: '', email: '', message: '', service: '', phone: '', captcha: ''}}
				validate={ validateForm }
				onSubmit={ submitForm }>
				{({ isSubmitting, values, errors, handleChange }) => (
					<Form className="form relative md:absolute w-full md:w-8/12 mt-4 md:mt-14 md:mt-32">
						<label className="block form__block">
							<span className="text-gray-700">Nombre</span>
							<InputText className="block w-full" name="name" type="text" value={values.name} onChange={ handleChange }/>
							<ErrorMessage name="name" component="div" className="form__error"/>
						</label>
						<label className="block form__block">
							<span className="text-gray-700">Correo electrónico</span>
							<InputText className="block w-full" name="email" type="text" value={values.email} onChange={ handleChange }/>
							<ErrorMessage name="email" component="div" className="form__error" />
						</label>
						<label className="block form__block">
							<span className="text-gray-700">Teléfono</span>
							<InputText className="block w-full" name="phone" type="text" value={values.phone} onChange={ handleChange }/>
							<ErrorMessage name="phone" component="div" className="form__error" />
						</label>
						<label className="block form__block">
							<span className="text-gray-700">Mensaje</span>
							<InputTextarea className="block w-full" name="message" rows={4} value={values.message} onChange={ handleChange }/>
							<ErrorMessage name="message" component="div" className="form__error"/>
						</label>
						<label className="block form__block">
							<span className="text-gray-700">Servicio de interés</span>
							<Dropdown value={service} name="service" onChange={(e) => setService(e.value)} options={services} optionLabel="name" placeholder="Servicios" className="w-full md:w-14rem" />
						</label>
						<div className="mt-4 form__recaptcha">
							<ReCAPTCHA
								sitekey="6LdSLEInAAAAAISqrVR02mwKnY31E-w_HhqZQ2VO"
								ref={assignRef}>
							</ReCAPTCHA>
							{errors.captcha && <div className="form__error text-red-600">El captcha es requerido</div>}
						</div>
						<Button
							className="w-full p-button-primary mt-2"
							disabled={ isSubmitting || disabled }
							loading={ isSubmitting }
							label="Enviar"/>
					</Form>
				)}
			</Formik>
		</div>
	)
}