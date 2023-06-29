'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { handlePostSubmit } from '@/dataFetching/dataFetching';
import SignUpType from '@/app/register/SignUpType';
import FormInput from '@/components/reuseableComp/FormInput';
import FormPasswordInput from '@/components/reuseableComp/FormPasswordInput';
import Button from '@/components/reuseableComp/Button';

export default function SignUp() {
	const router = useRouter();

	const [disable, setDisable] = useState(false);
	const [inputsData, setInputData] = useState({
		name: '',
		email: '',
		phone: '',
		password: '',
		reEnterPassword: '',
	});

	//Handling all the inputs change
	const handleChange = (e) => {
		let temp = { ...inputsData };
		temp[e.target.id] = e.target.value;

		setInputData(temp);
	};

	//Submit function handler
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (inputsData.password !== inputsData.reEnterPassword) {
			return alert('Comfirm password must be the same with password');
		}
		const { name, email, phone, password } = inputsData;
		const details = {
			name,
			email,
			phone,
			password,
		};

		setDisable(true);
		await handlePostSubmit(
			'auth/register', details, 
			'Error signing up please check your internet connection.',
			'Successfully signed up.',
			setDisable,
			'/contact-us',
			router,
		);
	};

	return (
		<main className="w-full h-fit mx-auto mt-20">
			<form
				onSubmit={handleSubmit}
				className="w-11/12 sm:w-[486px] h-fit m-auto flex flex-col justify-center items-center gap-4"
			>
				<div className="w-full">
					<p className="text-sm text-[#686868] mb-2">Sign up for free!</p>
					<p className="font-semibold text-3xl text-[#1E1E4B]">Get started</p>
				</div>

				<SignUpType />

				<FormInput
					id={'name'}
					type={'text'}
					value={inputsData.name}
					handleChange={(e) => handleChange(e)}
					forLabel={'Full name'}
					pattern={"^[^\s]+( [^\s]+)+$"}
					title={'Please enter valid full name'}
				/>

				<FormInput
					id={'email'}
					type={'text'}
					value={inputsData.email}
					handleChange={(e) => handleChange(e)}
					forLabel={'Email'}
					pattern={"^[^ ]+@[^ ]+\.[a-z]{2,63}$"}
					title={'Please enter valid email address.'}
				/>

				<FormInput
					id={'phone'}
					type={'text'}
					value={inputsData.phone}
					handleChange={(e) => handleChange(e)}
					forLabel={'Phone number'}
					pattern={"[0-9]{9,15}"}
					title={'Please enter valid phone number'}
				/>

				<FormPasswordInput
					id={'password'}
					value={inputsData.password}
					handleChange={(e) => handleChange(e)}
					forLabel={'Password'}
				/>

				<FormPasswordInput
					id={'reEnterPassword'}
					value={inputsData.reEnterPassword}
					handleChange={(e) => handleChange(e)}
					forLabel={'Re-enter password'}
				/>

				<div className="w-full mb-10 flex justify-start">
					<img src="/assets/check-rectangle.svg" alt="rectangle shape" />
					<p className="text-[#353F54] text-sm font-medium ml-2">
						I agree to Dutiful’s{' '}
						<span className="text-purple underline">terms and conditions</span>
					</p>
				</div>

				<div className="w-full">
					<Button text={'Sign Up'} type={'submit'} disable={disable} />

					<p className="w-full text-center text-sm text-[#A3B1BF] mt-3">
						Already have an account?{' '}
						<Link href="/login" className="text-purple-dark font-medium">
							Login
						</Link>
					</p>
				</div>
			</form>
		</main>
	);
}
