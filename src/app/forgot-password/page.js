'use client';

import Link from 'next/link';
import { useState } from 'react';
import { postData } from '@/dataFetching/dataFetching';
import FormInput from '@/components/reuseableComp/FormInput';
import Button from '@/components/reuseableComp/Button';
import OTPSentSuccess from '@/app/forgot-password/OTPSentSuccess';
import OTPConfirm from '@/app/forgot-password/OTPConfirm';
import ResetPassword from '@/app/forgot-password/ResetPassword';

export default function ForgotPassword() {
	const [disable, setDisable] = useState(false);
	const [otp, setOTP] = useState('');
	const [sendOTP, setSendOTP] = useState(false);
	const [sendEmail, setSendEmail] = useState(false);
	const [forPassword, setForPassword] = useState(true);
	const [resetPass, setResetPass] = useState(false);
	const [email, setEmail] = useState('');

	//Resend email handler
	const handleResendEmail = () => {
		setSendOTP(false);
		setSendEmail(false);
		setForPassword(true);
		setResetPass(false);
	};

	//Display confirmotp component for otp confirm
	const handleNext = () => {
		setSendOTP(true);
		setSendEmail(false);
		setForPassword(false);
	};

	//Submit function handler
	const handleSubmit = async (e) => {
		e.preventDefault();

		setDisable(true);

		try {
			const resendEmail = await postData('auth/password/email', { email });
			console.log(resendEmail);
			if(resendEmail !== 'Failed to post data'){
				setSendEmail(true);
				setDisable(false);
				setForPassword(false);
			}else{
				alert('Error sending email please check your internet connection.');
				setDisable(false);
			}

		} catch (error) {
			console.log(error, 'err resending email');
			alert('Error sending email please check your internet connection.');
			setDisable(false);
		}
	};

	return (
		<main className="w-full h-fit mx-auto mt-20">
			{sendOTP && (
				<OTPConfirm
					email={email}
					handleResendEmail={handleResendEmail}
					setOTP={setOTP}
					setSendOTP={setSendOTP}
					setResetPass={setResetPass}
				/>
			)}

			{sendEmail && <OTPSentSuccess email={email} handleNext={handleNext} />}

			{resetPass && <ResetPassword otp={otp} email={email} />}

			{forPassword && (
				<form
					onSubmit={handleSubmit}
					className="w-11/12 sm:w-[486px] h-fit m-auto flex flex-col justify-center items-center"
				>
					<div className="w-full mb-8 xs:mb-9">
						<Link href="/login">
							<img
								src="/assets/back-arrow.png"
								alt="back arrow icon"
								className="cursor-pointer"
							/>
						</Link>
					</div>

					<div className="w-full mb-8 xs:mb-9">
						<p className="font-semibold text-3xl text-[#1E1E4B] mb-3">
							Forgot password
						</p>
						<p className="text-sm text-[#686868]">
							Enter your email and will send you a mail on how to reset your
							password.
						</p>
					</div>

					<FormInput
						id={'email'}
						type={'text'}
						value={email}
						handleChange={(e) => setEmail(e.target.value)}
						forLabel={'Email'}
						imgIcon={'/assets/email.png'}
						pattern={"^[^ ]+@[^ ]+\.[a-z]{2,63}$"}
						title={'Please enter valid email address.'}
					/>

					<div className="w-full mt-8">
						<Button text={'Send email'} type={'submit'} disable={disable} />

						<p className="w-full text-center text-sm text-[#A3B1BF] mt-5">
							Or
							<Link href="/login" className="text-purple-dark font-medium pl-1">
								Login
							</Link>
						</p>
					</div>
				</form>
			)}
		</main>
	);
}
