const Button = ({ text, type, disable }) => {
	return (
		<button
			disabled={disable}
			type={type}
			className={`w-full h-16 bg-purple-dark flex flex-col justify-center items-center
		 	text-white cursor-pointer rounded-md shadow-[2px_8px_8px_rgba(86,86,86,0.25)]
			hover:opacity-60 ${disable ? `cursor-wait` : `cursor-pointer`}`}
		>
			{text}
		</button>
	);
};

export default Button;
