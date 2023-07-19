'use client';

import './ContactForm.scss'
import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Formik, Form, ErrorMessage } from 'formik';

export default function ContactForm() {

	interface Values {
		name: string,
		email: string,
		phone: string|number,
		message: string,
	}

	function validateForm(values: Values) {
		const errors: Values = {name: '', email: '', phone: '', message: ''}

		if( !values.email )
			errors.email = 'El correo electrónico es requerido'
		else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) )
			errors.email = 'El correo eletrónico es inválido'
		
		if( !values.name )
			errors.name = 'El nombre es requerido'

		if( !values.phone )
			errors.phone = 'El teléfono es requerido'

		return errors
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
				initialValues={{name: '', email: '', message: '', phone: ''}}
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
							<Button
								className="w-full p-button-primary"
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