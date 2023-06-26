const OTPSentSuccess = ({ email, handleNext }) => {
	return (
		<div className="w-11/12 sm:w-[486px] h-fit mx-auto my-32 md:my-36 flex flex-col justify-center items-center">
			<img src="/assets/otp-success.svg" alt="otp check success" />

			<p className="w-11/12 mt-3 mb-9 text-center text-sm text-[#686868]">
				An OTP code has been sent to {''} {email} {''} Check your email to get
				the code
			</p>

			<p
				onClick={handleNext}
				className={`w-full h-12 xs:h-16 mx-auto text-center bg-purple-dark text-white rounded-md shadow-[2px_8px_8px_rgba(86,86,86,0.25)]
								flex flex-col justify-center item-center hover:opacity-60 cursor-pointer`}
			>
				Next
			</p>
		</div>
	);
};

export default OTPSentSuccess;
