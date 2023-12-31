const FormOTPInput = ({ id, type, value, handleChange }) => {
	return (
		<input
			className="w-[calc(92%_/_3)] sm:w-[50px] h-12 sm:h-[60px] text-center bg-[#F3F3F3] outline-none border-2 border-solid border-[#B6B6E5] rounded-[10px]"
			type={type}
			value={value}
			onChange={handleChange}
			id={id}
			maxLength={1}
			autoFocus={true}
		/>
	);
};

export default FormOTPInput;
