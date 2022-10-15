import { ViewController } from './Container/ViewController/ViewController';
import { ElementController } from './Container/ElementController/ElementController';
import './App.css';
import * as DraggerElement from './Components/DraggerElement/expose';
import { ElementType } from './types/ElementType';

/**
 * 搜集所有的组件到列表中
 * @returns
 */
const collectDraggerElement = () => {
	const elementBucket: ElementType[] = [];
	for (const [, item] of Object.entries(DraggerElement)) {
		const { alias, realComponent } = item();
		elementBucket.push({
			alias: alias,
			realComponent: realComponent,
		});
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
		</div>
	);
}

export default App;
