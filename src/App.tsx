import { ViewController } from './Container/ViewController/ViewController';
import { ElementController } from './Container/ElementController/ElementController';
import './App.css';

function App() {
	return (
		<div className='app'>
			<ElementController></ElementController>
			<ViewController></ViewController>
		</div>
	);
}

export default App;
