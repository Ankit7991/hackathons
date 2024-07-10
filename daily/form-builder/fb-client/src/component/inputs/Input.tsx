import React, { Fragment } from 'react'

export interface IInput {
	type: 'text' | 'checkbox' | 'select';
	name: string;
	placeholder?: string;	
	label?: string;
	selectOptions?: {label: string, value: string}[]
}


function NormalInputs({ data }: { data: IInput }) {
	return (
		<>
			{data.label && <label htmlFor={data.name}>{data.label}</label>}
			<input type={data.type} placeholder={data.placeholder || ''} name={data.name} id={data.name} />
			<br />
		</>
	)
}

function Select({ data }: { data: IInput }) {
	return (
		<>
			{data.label && <label htmlFor={data.name}>{data.label}</label>}
			<select name={data.name}>
				{
					data.selectOptions?.map((options, i) => {
						return (
							<Fragment key={i}>
								<option value={options.value}>{options.label}</option>
							</Fragment>
						)
					})
				}
			</select>
			<br />
		</>
	)
}
export default function Input({ data }: { data: IInput }) {
	if (data.type === 'select') return <Select data={data} />;
	else return <NormalInputs data={data} />;
}
