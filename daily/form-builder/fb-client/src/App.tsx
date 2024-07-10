import { useState, Fragment, FormEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input, { IInput } from './component/inputs/Input'
import { useRef } from 'react'

const formData: IInput[] = [
	{
		type: 'text',
		placeholder: 'Username',
		name: 'username'
	},
	{
		type: 'checkbox',
		name: 'policy',
		label: 'Agree to policies'
	},
	{
		type: 'select',
		name: 'gender',
		selectOptions: [
			{ label: 'Male', value: 'male' },
			{ label: 'Female', value: 'female' }
		]
	}
]
function App() {
	const [count, setCount] = useState(0);
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
			<form ref={myform} onSubmit={(e: FormEvent) => handleSubmit(e)}>
				{
					formData.map((inputData, i) => {
						return <Fragment key={i}>
							<Input data={inputData} />
						</Fragment>
					})
				}
				<select name='abc'>
					<option value={'def'}>def</option>
				</select>

				<button>Submit</button>
			</form>
		</>
	)
}

export default App
