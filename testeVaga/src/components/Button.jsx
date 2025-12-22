let Button = ({
	className, 
	name, 
	imgSrc,
	alt,
	imgStyles
}) => {
	return (
		<button className={className} >
			{name}
			<img src={imgSrc || ""} className={imgStyles}/>
		</button>
	)	
}

export default Button;

// bg-[#ffe492] text-[#000] py-[0.75rem] px-8 rounded-sm