'use client';

import './ContactForm.scss'
import { useState, useRef, useCallback } from 'react'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Formik, Form, ErrorMessage } from 'formik';
import ReCAPTCHA from "react-google-recaptcha";
export default function ContactForm() {

	interface Values {
		name: string,
		email: string,
		phone: string|number,
		message: string,
		captcha: string
	}

	interface RecaptchaRefType {
		getValue: () => string | null
	}

	const recaptchaRef = useRef<RecaptchaRefType | null>(null)

	const assignRef = useCallback((ref: ReCAPTCHA | null) => {
		recaptchaRef.current = ref as RecaptchaRefType | null;
	}, []);


	function validateForm(values: Values) {
		//const errors: Values = {name: '', email: '', phone: '', message: '', captcha: ''}
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
		setTimeout(() => {
			alert("Done")
			setSubmitting( false )
		}, 2000)
	}

	return (
		<div className="px-4 md:px-28 py-0 md:py-40 relative">
			<Formik
				initialValues={{name: '', email: '', message: '', phone: '', captcha: ''}}
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
						<div className="mt-4">
							<ReCAPTCHA
								sitekey="6LdSLEInAAAAAISqrVR02mwKnY31E-w_HhqZQ2VO"
								ref={assignRef}>
							</ReCAPTCHA>
							{errors.captcha && <div className="form__error text-red-600">El captcha es requerido</div>}
							<Button
								className="w-full p-button-primary mt-2"
								disabled={ isSubmitting }
								loading={ isSubmitting }
								label="Enviar"/>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}