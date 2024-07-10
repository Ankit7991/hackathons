import { Fragment } from 'react'

export interface IInput {
	type: 'text' | 'checkbox' | 'select';
	name: string;
	placeholder?: string;	
	label?: string;
	selectOptions?: {label: string, value: string}[];
	required?: boolean;
	minLength?: number;
	maxLength?: number;
}


function TextInput({ data }: { data: IInput }) {
	return (
		<>
			{data.label && <label htmlFor={data.name}>{data.label}</label>}
			<input {...data}/>
			<br />
		</>
	)
}

function Checkbox({ data }: { data: IInput }) {
	return (
		<>
			{data.label && <label htmlFor={data.name}>{data.label}</label>}
			<input type={data.type} placeholder={data.placeholder || ''} name={data.name} id={data.name} required={data.required} />
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
	if (data.type === 'checkbox') return <Checkbox data={data} />;
	else return <TextInput data={data} />;
}
