'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { postData } from '@/dataFetching/dataFetching';
// import { toast } from 'react-toastify';
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
		try {
			const userLogin = await postData('auth/login', { ...loginData });
			console.log(userLogin);
			if (userLogin.error) {
				setDisable(false);
				return alert(userLogin.error);
			}
			alert('Successfully login.');
			router.push('/');
		} catch (error) {
			console.log(error, 'err loging in');
			setDisable(false);
		}
	};

	return (
		<main className="w-full h-fit mx-auto mt-20">
			<form
				onSubmit={handleSubmit}
				className="w-[486px] h-fit m-auto flex flex-col justify-center items-center gap-4"
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
