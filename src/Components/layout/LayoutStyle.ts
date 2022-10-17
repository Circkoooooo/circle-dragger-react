export const LAYOUT_ATTRIBUTE: React.CSSProperties = {
	width: '100%',
	height: '100px',
	backgroundColor: 'white',
};

export const defaultLayoutStyle = (): React.CSSProperties => {
	return {
		...LAYOUT_ATTRIBUTE,
	};
};
