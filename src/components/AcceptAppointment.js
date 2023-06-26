import Image from 'next/image';

const AcceptAppointment = () => {
	return (
		<div className="w-full h-fit mx-auto flex flex-col-reverse md:flex-row justify-center gap-6">
			<div className="w-full md:w-1/2 lg:w-fit flex flex-col justify-center items-center">
				<Image
					src="/assets/booked-calendar.svg"
					alt="booked calender"
					width={555}
					height={492}
					priority
				/>
			</div>

			<div className="w-full sm:w-4/5 md:w-1/2 lg:w-[47%] 2xl:w-[45%] mx-auto md:mx-0 pt-20 text-center md:text-left">
				<h2 className="mb-2 font-bold text-3xl text-[#1E1E4B]">
					Accept and sell appointments
				</h2>
				<p className="w-full lg:w-10/12 text-[#656565] text-lg">
					Let customers book their own appointment or consultation. Start
					accepting payments for appointments through your booking page.
				</p>
			</div>
		</div>
	);
};

export default AcceptAppointment;
