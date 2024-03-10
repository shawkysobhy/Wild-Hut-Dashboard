import GridLoader from 'react-spinners/GridLoader';
const overrideLoaderStyle = {
	display: 'block',
	margin: '5rem auto',
};
function Spinner() {
	return (
		<GridLoader
			color='#4338ca'
			margin={4}
			size={13}
			cssOverride={overrideLoaderStyle}
		/>
	);
}

export default Spinner;
