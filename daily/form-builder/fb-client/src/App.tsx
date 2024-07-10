import { useState, Fragment, FormEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input, { IInput } from './component/inputs/Input'
import { useRef } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import { AddForm } from './pages/AddForm'
import Test from './pages/Test'

function App() {
	const myform = useRef(null);


	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (myform.current) {
			const form = new FormData(myform.current);
			const formData = Object.fromEntries(form);
			console.log(formData);
		};
	}


	return (
		<>
			<div style={{display: 'flex', 'gap': '10px', 'marginBottom': '20px'}}>
				<Link to={'/'}>Home</Link>
				<Link to={'/create-form'}>Create Form</Link>
				<Link to={'/test'}>Test</Link>
			</div>
			<Routes>
				<Route path='/test' element={<Test />}/>
				<Route path='/create-form' element={<AddForm />}/>
			</Routes>
		</>
	)
}

export default App
