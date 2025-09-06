import { useEffect, useState } from 'react'
import './App.css'


function App() {
const [clickNumber, setClickNumber] = useState<number>(() => {
	const stored = (localStorage.getItem("clickNumber"))
	return stored ? JSON.parse(stored) as number : 0;
});
	//huehue ok guys its done now

	useEffect(() => {
		localStorage.setItem("clickNumber", JSON.stringify(clickNumber));
	},[clickNumber])

  	return (
	<>
		<div className="flex gap-5">
			<button
			className="bg-amber-500 cursor-pointer"
			onClick={() => {
				setClickNumber(clickNumber + 1)
			}}
			>Increase</button>
			<button
				className=""
				onClick={() => {
					setClickNumber(clickNumber - 1)
				}}
			>Decrease</button>

			<button
				onClick={() => {
					setClickNumber(0);
				}}
			>Reset</button>

			<h1
			className=""
			>
				Click number = {clickNumber}
			</h1>
		</div>
    </>
  )
}

export default App
