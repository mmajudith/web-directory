import Image from 'next/image';

const ListBusiness = () => {
	return (
		<div className="w-full h-fit mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
			<div className="w-full sm:w-4/5 md:w-1/2 lg:w-[45%] 2xl:w-[42%] text-center md:text-left">
				<h1 className="mb-4 font-bold text-3xl xs:text-4xl text-[#230B34]">
					List and grow your business  with just few clicks
				</h1>
				<p className="text-dark-gray text-base xs:text-lg font-medium">
					Eliminate manual work and save time by listing your business or
					service on the best business directory in Nigeria.
				</p>
			</div>

			<div className="w-full md:w-1/2 lg:w-fit flex flex-col justify-center items-center">
				<Image
					src="/assets/dashboard.png"
					alt="dashboard icon"
					width={600}
					height={563}
					priority
				/>
			</div>
		</div>
	);
};

export default ListBusiness;
