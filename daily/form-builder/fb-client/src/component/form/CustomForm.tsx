import { FormEvent, Fragment, ReactNode, useRef, useState } from 'react'
import Input, { IInput } from '../inputs/Input';


interface ICustomForm {
	formFields: IInput[],
	children?: ReactNode,
	submit?: (...keys: any[]) => void
};
 
export const CustomForm = ({ formFields, children, submit }: ICustomForm) => {
	const myform = useRef(null);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (myform.current) {
			const form = new FormData(myform.current);
			const formData = Object.fromEntries(form);
			submit?.(formData);
		};
	}

	return (
		<>
		
			<form ref={myform} onSubmit={(e: FormEvent) => handleSubmit(e)}>
				{
					formFields.map((inputData, i) => {
						return <Fragment key={i}>
							<Input data={inputData} />
						</Fragment>
					})
				}
				{children}
				<button>Submit</button>
			</form>
		</>
	)
}
