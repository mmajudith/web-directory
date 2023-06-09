import Image from 'next/image';

const CollectRatings = () => {
	return (
		<div className="w-full h-fit mx-auto flex justify-center items-center gap-6">
			<Image
				src="/assets/customer-rating.svg"
				alt="customer-rating"
				width={580}
				height={580}
				priority
			/>

			<div className="w-[44%] 2xl:w-[41%]">
				<h2 className="w-10/12  mb-2 font-bold text-3xl text-[#1E1E4B]">
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
