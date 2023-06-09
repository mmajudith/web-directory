'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { postData } from '@/dataFetching/dataFetching';
// import { toast } from 'react-toastify';
import SignUpType from '@/components/SignUpType';
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
			return alert('Comfirm password must be the same');
		}
		const { name, email, phone, password } = inputsData;
		const details = {
			name,
			email,
			phone,
			password,
		};

		setDisable(true);
		try {
			const newUser = await postData('auth/register', details);
			console.log(newUser);
			alert('Successfully signed up.');
			router.push('/contact-us');
		} catch (error) {
			console.log(error, 'err signing in');
			setDisable(false);
		}
	};

	return (
		<main className="w-full h-fit mx-auto mt-20">
			<form
				onSubmit={handleSubmit}
				className="w-[486px] h-fit m-auto flex flex-col justify-center items-center gap-4"
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
				/>

				<FormInput
					id={'email'}
					type={'text'}
					value={inputsData.email}
					handleChange={(e) => handleChange(e)}
					forLabel={'Email'}
				/>

				<FormInput
					id={'phone'}
					type={'text'}
					value={inputsData.phone}
					handleChange={(e) => handleChange(e)}
					forLabel={'Phone number'}
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
