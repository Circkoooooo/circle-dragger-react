export const LAYOUT_ATTRIBUTE: React.CSSProperties = {
	width: '100%',
	height: '100px',
	backgroundColor: 'white',
	padding: '20px',
};

export const defaultLayoutStyle = (): React.CSSProperties => {
	return {
		...LAYOUT_ATTRIBUTE,
	};
};
