function SmallErrorMessage({ message = 'error' }) {
	return <span className='ml-2 text-xs text-red-600'>{message}</span>;
}

export default SmallErrorMessage;
