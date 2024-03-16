import { ClipLoader } from 'react-spinners';

const overrideLoaderStyle = {
	display: 'block',
	margin: '0px 5px 0px auto ',
};
function MiniSpinner() {
	return (
		<ClipLoader color='#fff' size={15} cssOverride={overrideLoaderStyle} />
	);
}

export default MiniSpinner;
