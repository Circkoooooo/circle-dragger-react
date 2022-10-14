import { ViewController } from './Container/ViewContainer/ViewController';
import { DataContainer } from './Container/DataContainter/DataContainer';
import './App.css';

function App() {
	return (
		<div className='app'>
			<DataContainer></DataContainer>
			<ViewController></ViewController>
		</div>
	);
}

export default App;
