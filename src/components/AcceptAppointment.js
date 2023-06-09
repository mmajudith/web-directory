import Image from 'next/image';

const AcceptAppointment = () => {
	return (
		<div className="w-full h-fit mx-auto flex justify-center gap-6">
			<Image
				src="/assets/booked-calendar.svg"
				alt="booked calender"
				width={555}
				height={492}
				priority
			/>

			<div className="w-[47%] 2xl:w-[45%] pt-20">
				<h2 className="mb-2 font-bold text-3xl text-[#1E1E4B]">
					Accept and sell appointments
				</h2>
				<p className="w-10/12 text-[#656565] text-lg">
					Let customers book their own appointment or consultation. Start
					accepting payments for appointments through your booking page.
				</p>
			</div>
		</div>
	);
};

export default AcceptAppointment;
