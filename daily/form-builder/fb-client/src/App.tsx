import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input, { IInput } from './component/inputs/Input'

const formData: IInput[] = [
	{
		type: 'text',
		placeholder: 'Provide your text'
	}
]
function App() {
  const [count, setCount] = useState(0)



  return (
    <>
		<form>
			{
				formData.map((inputData, i) => {
					return <Fragment key={i}>
						<Input data={inputData}/>
					</Fragment>
				})
			}
		</form>
    </>
  )
}

export default App
