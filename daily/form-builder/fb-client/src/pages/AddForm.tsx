import React, { Fragment, useState } from 'react'
import { CustomForm } from '../component/form/CustomForm'
import { FormItem } from '../component/inputs/FormItem'
import { IInput } from '../component/inputs/Input'

const formFields: IInput[] = [
	{
		name: 'formname',
		type: 'text',
		placeholder: 'Form Name'
	}
]
export const AddForm = () => {
	const[items, setItems] = useState<{[key: string]: any}[]>([]);
	function handleSubmit(data: any) {
		console.log(`Handle submit: `, data);
		const payload = {
			formName: data.formname,
			inputs: []
		};
		Object.entries(data).forEach(([key, value]) => {
			if(key.startsWith('inputs')) {
				const index = key.match(/inputs.\w+\[($1)\]/)
			}
		})
	}
	return (
		<div>
			<h2>Create Form</h2>
			<div>
				<CustomForm formFields={formFields} submit={handleSubmit}>
					<input type={'text'} name="child" placeholder='hi' />
					{
						items.map((el, i) => {
							return <Fragment key={i}>
								<FormItem index={i} itemParentName='inputs'/>
							</Fragment>
						})
					}
				<button onClick={() => setItems(prev => [
					...prev, {}
				])}>Add Item</button>
				</CustomForm>
			</div>
		</div>
	)
}
