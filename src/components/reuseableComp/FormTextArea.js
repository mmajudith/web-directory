const FormTextArea = ({ id, value, handleChange, text }) => {
	return (
		<div className="w-full flex flex-col justify-start gap-1">
			<p className="font-medium text-base text-[#603F8B]">{text}</p>
			<textarea
				id={id}
				value={value}
				onChange={handleChange}
				required
				className="w-full h-[134px] p-5 bg-[#F8FAFD] outline-none border border-solid border-[#E7EAF1] rounded-md resize-none"
			></textarea>
		</div>
	);
};

export default FormTextArea;
