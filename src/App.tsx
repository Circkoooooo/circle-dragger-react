import { ViewController } from './Container/ViewController/ViewController';
import { ElementController } from './Container/ElementController/ElementController';
import './App.css';
import * as DraggerElement from './Components/expose';
import { ElementType } from './types/ElementType';
import { DataController } from './Container/DataContainter/DataController';

/**
 * 搜集所有的组件到列表中
 * @returns
 */
const collectDraggerElement = () => {
	const elementBucket: ElementType[] = [];
	for (const [, item] of Object.entries(DraggerElement)) {
		elementBucket.push({ ...item() });
	}
	return elementBucket;
};

function App() {
	return (
		<div className='app'>
			<ElementController
				elementList={collectDraggerElement()}
			></ElementController>
			<ViewController></ViewController>
			<DataController></DataController>
		</div>
	);
}

export default App;
