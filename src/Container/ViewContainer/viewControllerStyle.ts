export const viewControllerStyle = (): React.CSSProperties => {
	return {
		height: '100%',
		flex: 1,
		backgroundColor: '#f0f0f0',
		position: 'relative',
		overflow: 'auto',
	};
};

export const rulerStyle = (
	direction: 'row' | 'column',
	offset: number
): React.CSSProperties => {
	let mainSideSize: string = '0';
	let secondarySideSize: string = '0';
	let translate = '';
	let left = 0;
	let top = 0;

	if (direction === 'row') {
		mainSideSize = '100%';
		secondarySideSize = '20px';
		translate = `translateX(${offset}px)`;
	} else {
		mainSideSize = '20px';
		secondarySideSize = '100%';
		translate = `translateY(${offset}px)`;
	}
	return {
		left,
		top,
		width: mainSideSize,
		height: secondarySideSize,
		position: 'sticky',
		backgroundColor: 'black',
		transform: translate,
	};
};
