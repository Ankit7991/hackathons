import { useState } from 'react'
import { IInput } from './Input';


export const FormItem = ({ index, itemParentName: key }: { index: number, itemParentName: string }) => {
	const [type, setType] = useState<IInput['type']>('text');
	return (
		<div>
			<div style={{ display: 'inline-block', border: '1px solid gray', padding: '10px', margin: '10px 0', borderRadius: '10px' }}>
				<select name={`${key}.type[${index}]`} onChange={(e: any) => setType(e.target?.value)}>
					Select Type
					{
						['text', 'checkbox', 'select'].map(el => {
							return <option key={el} value={el}>
								{el}
							</option>
						})
					}
				</select>
				<input type='text' placeholder='Enter input name' name={`${key}.name[${index}]`} />
				<input type='text' placeholder='Enter placeholder' name={`${key}.placeholder[${index}]`} />
				<input type='text' placeholder='Enter label' name={`${key}.label[${index}]`} />
				<div>
					<label htmlFor='isRequired'>Is Required?</label>
					<input type={'checkbox'} name={`${key}.required[${index}]`} id='isRequired' /><br />
					{!['select'].includes(type) && <>
						<input type={'number'} name={`${key}.minLength[${index}]`} placeholder='Min Length' />
						<input type={'number'} name={`${key}.maxLength[${index}]`} placeholder='Max Length' />
					</>}
				</div>
			</div>
		</div>
	)
}
