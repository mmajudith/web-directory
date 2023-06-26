import Image from 'next/image';

const CollectRatings = () => {
	return (
		<div
			className="w-full h-fit mx-auto flex flex-col-reverse md:flex-row justify-center 
				items-center gap-5 mt-20 md:mt-8"
		>
			<div className="w-full md:w-1/2 lg:w-fit mx-auto flex flex-col justify-center items-center">
				<Image
					src="/assets/customer-rating.svg"
					alt="customer-rating"
					width={580}
					height={580}
					priority
				/>
			</div>

			<div className="w-full sm:w-4/5 md:w-1/2 lg:w-[44%] 2xl:w-[41%] text-center md:text-left">
				<h2 className="w-full xl:w-10/12  mb-2 font-bold text-3xl text-[#1E1E4B]">
					Collect reviews and ratings from customers
				</h2>
				<p className="text-[#656565] text-lg">
					Accelerate your business reputation by 90% and gain social
					proof through reviews and ratings requested from customers.
				</p>
			</div>
		</div>
	);
};

export default CollectRatings;
