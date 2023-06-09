'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { postData } from '@/dataFetching/dataFetching';
// import { toast } from 'react-toastify';
import FormPasswordInput from '@/components/reuseableComp/FormPasswordInput';
import Button from '@/components/reuseableComp/Button';

export default function ResetPassword() {
	const router = useRouter();

	const [disable, setDisable] = useState(false);
	const [resetPassword, setResetPassword] = useState({
		old_password: '',
		new_password: '',
	});

	//Handling all the inputs change
	const handleChange = (e) => {
		let temp = { ...resetPassword };
		temp[e.target.id] = e.target.value;

		setResetPassword(temp);
	};

	//Submit function handler
	const handleResetSubmit = async (e) => {
		e.preventDefault();

		setDisable(true);
		try {
			const changedPassword = await postData('auth/password/change', {
				...resetPassword,
			});
			console.log(changedPassword);

			alert('Password successfully changed.');
			router.push('/login');
		} catch (error) {
			console.log(error, 'err changing password');
			setDisable(false);
		}
	};

	return (
		<main className="w-full h-fit mx-auto mt-20">
			<form
				onSubmit={handleResetSubmit}
				className="w-[486px] h-fit m-auto flex flex-col justify-center items-center gap-4"
			>
				<div className="w-full mb-5">
					<p className="font-semibold text-3xl text-[#1E1E4B] mb-3">
						Reset password
					</p>
					<p className="text-sm text-[#686868]">Set your new password</p>
				</div>
				<FormPasswordInput
					id={'old_password'}
					value={resetPassword.old_password}
					handleChange={(e) => handleChange(e)}
					forLabel={'Enter new password'}
				/>

				<FormPasswordInput
					id={'new_password'}
					value={resetPassword.new_password}
					handleChange={(e) => handleChange(e)}
					forLabel={'Re-enter new password'}
				/>

				<div className="w-full mt-10">
					<Button text={'Reset password'} type={'submit'} disable={disable} />

					<p className="w-full text-center text-sm text-[#A3B1BF] mt-4">
						Or{' '}
						<Link href="/register" className="text-purple-dark font-medium">
							Create new account.
						</Link>
					</p>
				</div>
			</form>
		</main>
	);
}
