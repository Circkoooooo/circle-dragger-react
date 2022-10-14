export const viewControllerStyle = (): React.CSSProperties => {
	return {
		height: '100vh',
		flex: 1,
		backgroundColor: '#f0f0f0',
		position: 'relative',
	};
};

export const rulerStyle = (
	direction: 'row' | 'column'
): React.CSSProperties => {
	let mainSideSize: string = '0';
	let secondarySideSize: string = '0';

	if (direction === 'row') {
		mainSideSize = '100%';
		secondarySideSize = '20px';
	} else {
		mainSideSize = '20px';
		secondarySideSize = '100%';
	}
	return {
		width: mainSideSize,
		height: secondarySideSize,
		position: 'absolute',
		backgroundColor: 'black',
	};
};
