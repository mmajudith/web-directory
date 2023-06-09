import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { toast } from 'react-toastify';
import { postData } from '@/dataFetching/dataFetching';

import FormOTPInput from '@/components/reuseableComp/FormOTPInput';
import Button from '@/components/reuseableComp/Button';

const OTPConfirm = ({ email, handleResendEmail }) => {
	const router = useRouter();

	const [disable, setDisable] = useState(false);
	const [otpNumber, setOTPNumber] = useState({
		firstDigit: '',
		secDigit: '',
		thirdDigit: '',
		fourthDigit: '',
		fifthDigit: '',
		sixthDigit: '',
	});

	//Handling all the inputs change
	const handleChange = (e) => {
		let temp = { ...otpNumber };
		temp[e.target.id] = e.target.value;

		setOTPNumber(temp);
	};

	//Comfirm OTP submit function
	const handleComfirmOTP = async (e) => {
		e.preventDefault();

		const otp = Object.values(otpNumber).join('');

		setDisable(true);
		try {
			const comfirmOtp = await postData('auth/email/verify', { otp });
			console.log(comfirmOtp);
			alert('OTP confirmed.');
			router.push('/reset-password');
		} catch (error) {
			console.log(error, 'err confirming otp');
			setDisable(false);
		}
	};

	return (
		<main className="w-full h-fit mx-auto mt-20">
			<form
				onSubmit={handleComfirmOTP}
				className="w-[486px] h-fit m-auto flex flex-col justify-center items-center"
			>
				<div className="w-[70%] flex justify-between">
					<FormOTPInput
						id={'firstDigit'}
						type={'text'}
						value={otpNumber.firstDigit}
						handleChange={(e) => handleChange(e)}
					/>
					<FormOTPInput
						id={'secDigit'}
						type={'text'}
						value={otpNumber.secDigit}
						handleChange={(e) => handleChange(e)}
					/>
					<FormOTPInput
						id={'thirdDigit'}
						type={'text'}
						value={otpNumber.thirdDigit}
						handleChange={(e) => handleChange(e)}
					/>
					<FormOTPInput
						id={'fourthDigit'}
						type={'text'}
						value={otpNumber.fourthDigit}
						handleChange={(e) => handleChange(e)}
					/>
					<FormOTPInput
						id={'fifthDigit'}
						type={'text'}
						value={otpNumber.fifthDigit}
						handleChange={(e) => handleChange(e)}
					/>
					<FormOTPInput
						id={'sixthDigit'}
						type={'text'}
						value={otpNumber.sixthDigit}
						handleChange={(e) => handleChange(e)}
					/>
				</div>

				<p className="w-10/12 mt-4 mb-8 text-center text-sm text-[#686868]">
					Enter OTP code that was sent to your email, {''}
					{email}.
				</p>

				<div className="w-full">
					<Button text={'Confirm OTP'} type={'submit'} disable={disable} />

					<p className="w-full text-center text-sm text-[#A3B1BF] mt-5">
						Didn't get a code?{' '}
						<span
							onClick={handleResendEmail}
							className="text-purple-dark font-medium cursor-pointer"
						>
							Resend
						</span>
					</p>
				</div>
			</form>
		</main>
	);
};

export default OTPConfirm;
