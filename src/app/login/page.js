'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { handlePostSubmit } from '@/dataFetching/dataFetching';
import FormInput from '@/components/reuseableComp/FormInput';
import FormPasswordInput from '@/components/reuseableComp/FormPasswordInput';
import Button from '@/components/reuseableComp/Button';

export default function Login() {
	const router = useRouter();

	const [disable, setDisable] = useState(false);
	const [loginData, setLoginData] = useState({ email: '', password: '' });

	//Handling all the inputs change
	const handleChange = (e) => {
		let temp = { ...loginData };
		temp[e.target.id] = e.target.value;

		setLoginData(temp);
	};

	//Submit function handler
	const handleSubmit = async (e) => {
		e.preventDefault();

		setDisable(true);
		await handlePostSubmit(
			'auth/login', loginData, 
			'Wrong credentials',
			'Successfully login.',
			setDisable,
			'/',
			router,
		);
	};

	return (
		<main className="w-full h-fit mx-auto mt-20">
			<form
				onSubmit={handleSubmit}
				className="w-11/12 sm:w-[486px] h-fit m-auto flex flex-col justify-center items-center gap-4"
			>
				<div className="w-full mb-8">
					<p className="text-sm text-[#686868] mb-2">Jump right back in</p>
					<p className="font-semibold text-3xl text-[#1E1E4B]">Login</p>
				</div>

				<FormInput
					id={'email'}
					type={'text'}
					value={loginData.email}
					handleChange={(e) => handleChange(e)}
					forLabel={'Email'}
					pattern={"^[^ ]+@[^ ]+\.[a-z]{2,63}$"}
					title={'Please enter valid email address.'}
				/>
				<FormPasswordInput
					id={'password'}
					value={loginData.password}
					handleChange={(e) => handleChange(e)}
					forLabel={'Password'}
				/>

				<div className="w-full mb-8 flex justify-end">
					<p className="text-purple text-sm cursor-pointer">
						<Link href="/forgot-password">Forgot password?</Link>
					</p>
				</div>

				<div className="w-full">
					<Button text={'Login'} type={'submit'} disable={disable} />

					<p className="w-full text-center text-sm text-[#A3B1BF] mt-3">
						Don’t have an account?{' '}
						<Link href="/register" className="text-purple-dark font-medium">
							Sign Up
						</Link>
					</p>
				</div>
			</form>
		</main>
	);
}
