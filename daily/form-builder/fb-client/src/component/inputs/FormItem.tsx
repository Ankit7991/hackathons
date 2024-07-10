import React, { useState } from 'react'
import { IInput } from './Input';



export const FormItem = () => {
	const [type, setType] = useState<IInput['type']>('text');
	return (
		<div>
			<div style={{display: 'inline-block', border: '1px solid gray', padding: '10px', margin: '10px 0', borderRadius: '10px'}}>
				<select name='type' onChange={(e: any) => setType(e.target?.value)}>
					Select Type
					{
						['text', 'checkbox', 'select'].map(el => {
							return <option key={el} value={el}>
								{el}
							</option>
						})
					}
				</select>
				<input type='text' placeholder='Enter input name' name='name' />
				<input type='text' placeholder='Enter placeholder' name='placeholder' />
				<input type='text' placeholder='Enter label' name='label' />
				<div>
					<label htmlFor='isRequired'>Is Required?</label>
					<input type={'checkbox'} name='required' id='isRequired'/><br/>
					<input type={'number'} name='minLength' placeholder='Min Length' />
					<input type={'number'} name='maxLength' placeholder='Max Length' />
				</div>
				{/* {type} */}
			</div>
		</div>
	)
}
