export const viewControllerStyle = (): React.CSSProperties => {
	return {
		height: '100%',
		flex: 1,
		backgroundColor: '#f0f0f0',
		position: 'relative',
	};
};

export const rulerStyle = (
	direction: 'row' | 'column',
	offset: number
): React.CSSProperties => {
	let mainSideSize: string = '0';
	let secondarySideSize: string = '0';
	let translate = '';

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
		width: mainSideSize,
		height: secondarySideSize,
		position: 'absolute',
		backgroundColor: 'black',
		transform: translate,
	};
};
