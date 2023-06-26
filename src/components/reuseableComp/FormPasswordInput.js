import { useState } from 'react';

const FormPasswordInput = ({ id, value, handleChange, forLabel }) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleShowHidePass = () => {
		setIsVisible((prev) => !prev);
	};

	return (
		<div className="w-full flex flex-col justify-start gap-1">
			<label
				htmlFor="password"
				className="font-medium text-base text-[#603F8B]"
			>
				{forLabel}
			</label>
			<div className="w-full relative">
				<input
					className="w-full h-10 xs:h-12 pl-5 bg-[#F8FAFD] outline-none border border-solid border-[#E7EAF1] rounded-md"
					type={`${!isVisible ? 'password' : 'text'}`}
					value={value}
					onChange={handleChange}
					id={id}
					required
				/>

				<p
					className="absolute right-5 top-[12px] xs:top-4 cursor-pointer"
					onClick={handleShowHidePass}
				>
					{!isVisible ? (
						<img src="/assets/Show.png" alt="show password icon" />
					) : (
						<img src="/assets/Hide.png" alt="hide password icon" />
					)}
				</p>
			</div>
		</div>
	);
};

export default FormPasswordInput;
