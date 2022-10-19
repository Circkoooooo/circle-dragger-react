export const LAYOUT_ATTRIBUTE: React.CSSProperties = {
	width: '100%',
	minHeight: '100px',
	backgroundColor: 'white',
	padding: '20px',
	display: 'flex',
	flexWrap: 'wrap',
};

export const defaultLayoutStyle = (): React.CSSProperties => {
	return {
		...LAYOUT_ATTRIBUTE,
	};
};
