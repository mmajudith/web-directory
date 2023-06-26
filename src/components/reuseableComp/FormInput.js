const FormInput = ({
	id,
	type,
	value,
	handleChange,
	forLabel,
	optional,
	imgIcon,
}) => {
	return (
		<div className="w-full flex flex-col justify-start gap-1 relative">
			<label
				htmlFor={forLabel}
				className="font-medium text-base text-[#603F8B]"
			>
				{forLabel} {optional && <span className="italic">{optional}</span>}
			</label>

			<input
				className="w-full h-10 xs:h-12 pl-5 bg-[#F8FAFD] outline-none border border-solid border-[#E7EAF1] rounded-md"
				type={type}
				value={value}
				onChange={handleChange}
				id={id}
				required
			/>
			{imgIcon && (
				<img
					src={imgIcon}
					alt="icon"
					className={`absolute right-5 ${
						id === 'subject'
							? `top-[44px] xs:top-12`
							: `top-[38px] xs:top-[41px] `
					} cursor-pointer`}
				/>
			)}
		</div>
	);
};

export default FormInput;
