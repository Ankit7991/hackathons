import React from 'react'
import { CustomForm } from '../component/form/CustomForm'
import { IInput } from '../component/inputs/Input'

const formFields: IInput[] = [
	{
		name: 'formname',
		type: 'text',
		placeholder: 'Form Name'
	}
]
export const AddForm = () => {
	return (
		<div>
			<h2>Create Form</h2>
			<div>
				<CustomForm formFields={formFields}>
					<input type={'text'} name="child" placeholder='hi' />
				</CustomForm>
				<button>Add Item</button>
			</div>
		</div>
	)
}
