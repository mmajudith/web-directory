'use client';

import { useState } from 'react';
import { postData } from '@/dataFetching/dataFetching';
import { toast } from 'react-toastify';

import Card from '@/components/reuseableComp/Card';
import FormInput from '@/components/reuseableComp/FormInput';
import FormTextArea from '@/components/FormTextArea';
import Button from '@/components/reuseableComp/Button';

export default function ContactUs() {
	const [disable, setDisable] = useState(false);
	const [contact, setContact] = useState({
		name: '',
		email: '',
		business_type: '',
		subject: '',
		message: '',
	});

	//Handling all the inputs change
	const handleChange = (e) => {
		let temp = { ...contact };
		temp[e.target.id] = e.target.value;

		setContact(temp);
	};

	//Submit function handler
	const handleSubmit = async (e) => {
		e.preventDefault();

		setDisable(true);
		try {
			const receivedMessage = await postData('contact', { ...contact });
			console.log(receivedMessage);
			alert('We have received your message.');
			setDisable(false);
		} catch (error) {
			console.log(error, 'err contacting us');
			setDisable(false);
		}
	};

	return (
		<main className="w-full h-fit mx-auto">
			<div className="w-full h-64 m-auto pt-10 text-center bg-[url('/assets/contact-bg.png')] bg-repeat bg-fill bg-purple-dark relative z-0">
				<p className="font-semibold text-3xl text-white mb-3">Get in touch</p>
				<p className="text-[#EDDFFF] text-lg">
					We are here to support you throughout the process of getting your
					business listed.
				</p>
			</div>

			<div className="max-w-[1440px] h-fit w-11/12 mx-auto relative top-[-83px] z-10">
				<div className="w-full flex justify-between gap-9">
					<Card
						title={'Customer support'}
						descriptions={'Please fill out the form below'}
						imgIcon={'/assets/sms-tracking.png'}
					/>
					<Card
						title={'Business address'}
						descriptions={`Suites (C113 & C114) Akord Shopping Mall, Bogije, Elemoro, 101001, Lagos, Nigeria`}
						imgIcon={'/assets/map.png'}
					/>
					<Card
						title={'Phone number'}
						descriptions={'+234 903 921 6724'}
						imgIcon={'/assets/call-calling.png'}
					/>
				</div>
			</div>

			<form
				onSubmit={handleSubmit}
				className="w-[486px] h-fit m-auto mt-3 flex flex-col justify-center items-center gap-7"
			>
				<FormInput
					id={'name'}
					type={'text'}
					value={contact.name}
					handleChange={(e) => handleChange(e)}
					forLabel={'Full name'}
				/>
				<FormInput
					id={'email'}
					type={'text'}
					value={contact.email}
					handleChange={(e) => handleChange(e)}
					forLabel={'Email'}
				/>
				<FormInput
					id={'business_type'}
					type={'text'}
					value={contact.business_type}
					handleChange={(e) => handleChange(e)}
					forLabel={'Business type'}
					optional={'(Optional)'}
				/>

				<FormInput
					id={'subject'}
					type={'text'}
					value={contact.subject}
					handleChange={(e) => handleChange(e)}
					forLabel={'Subject'}
					imgIcon={'/assets/arrow-down.png'}
				/>

				<FormTextArea
					id={'message'}
					value={contact.message}
					handleChange={(e) => handleChange(e)}
					text={'Write your message'}
				/>

				<div className="w-full mt-5">
					<Button text={'Send message'} type={'submit'} disable={disable} />
				</div>
			</form>
		</main>
	);
}
