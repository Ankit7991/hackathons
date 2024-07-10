import React from 'react'

export interface IInput {
	type: 'text' | 'checkbox' | 'boolean';
	name: string;
	placeholder?: string;
	label?: string;
}

export default function Input({data}: {data: IInput}) {
  return (
	<>
		<label 
		<input type={data.type} placeholder={data.placeholder || ''}/>
	</>
  )
}
