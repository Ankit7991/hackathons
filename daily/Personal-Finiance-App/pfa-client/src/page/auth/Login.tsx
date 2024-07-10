import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useMutation } from 'react-query';


const validation = yup.object().shape({
	email: yup.string().email().required('Email is required.'),
	password: yup.string().min(4).required('Password is required.')
});


export default function Login() {
	return (
		<div>
			<Formik
				initialValues={{
					email: '', password: ''
				}}
				validationSchema={validation}
			>

			</Formik>
		</div>
	)
}
