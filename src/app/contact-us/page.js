'use client';

import { useState } from 'react';
import { handlePostSubmit } from '@/dataFetching/dataFetching';

import Card from '@/components/reuseableComp/Card';
import FormInput from '@/components/reuseableComp/FormInput';
import FormTextArea from '@/components/reuseableComp/FormTextArea';
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
		await handlePostSubmit(
			'contact', contact, 
			'Error receiving your message please check your internet connection.',
			'We have received your message.',
			setDisable
		);
	};

	return (
		<main className="w-full h-fit mx-auto mt-5 md:mt-0">
			<div className="w-full h-64 m-auto px-3 pt-10 text-center bg-[url('/assets/contact-bg.png')] bg-repeat bg-fill bg-purple-dark relative z-0">
				<p className="font-semibold text-[27px] xs:text-3xl text-white mb-3">
					Get in touch
				</p>
				<p className="text-[#EDDFFF] text-base xs:text-lg">
					We are here to support you throughout the process of getting your
					business listed.
				</p>
			</div>

			<div className="max-w-[1440px] w-[95%] xl:w-11/12 h-fit mx-auto relative top-[-83px] z-10">
				<div
					className="w-full flex flex-col xs:flex-row justify-center xs:justify-between 
					 			items-center xs:items-baseline gap-3 lg:gap-9"
				>
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
						descriptions={'+234 907 229 9413'}
						imgIcon={'/assets/call-calling.png'}
					/>
				</div>
			</div>

			<form
				onSubmit={handleSubmit}
				className="w-11/12 sm:w-[486px] h-fit m-auto mt-3 flex flex-col justify-center items-center gap-7"
			>
				<FormInput
					id={'name'}
					type={'text'}
					value={contact.name}
					handleChange={(e) => handleChange(e)}
					forLabel={'Full name'}
					pattern={"^[^\s]+( [^\s]+)+$"}
					title={'Please enter valid full name'}
				/>
				<FormInput
					id={'email'}
					type={'text'}
					value={contact.email}
					handleChange={(e) => handleChange(e)}
					forLabel={'Email'}
					pattern={"^[^ ]+@[^ ]+\.[a-z]{2,63}$"}
					title={'Please enter valid email address.'}
				/>
				<FormInput
					id={'business_type'}
					type={'text'}
					value={contact.business_type}
					handleChange={(e) => handleChange(e)}
					forLabel={'Business type'}
					optional={'(Optional)'}
					// pattern={'[A-Za-z0-9]'}
					// title={'Texts too short or long'}
				/>

				<FormInput
					id={'subject'}
					type={'text'}
					value={contact.subject}
					handleChange={(e) => handleChange(e)}
					forLabel={'Subject'}
					imgIcon={'/assets/arrow-down.png'}
					// pattern={'[A-Za-z0-9]'}
					// title={'Texts too short or long'}
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
