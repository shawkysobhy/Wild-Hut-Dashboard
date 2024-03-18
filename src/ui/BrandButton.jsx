function BrandButton({ children, onClick, sx, type }) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`px-6 py-5 font-medium bg-brand-light border-none rounded-md  text-sm shadow-sm w-fit text-ctaText hover:bg-brand-dark ${sx}`}>
			{children}
		</button>
	);
}

export default BrandButton;
