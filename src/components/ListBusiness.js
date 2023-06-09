import Image from 'next/image';

const ListBusiness = () => {
	return (
		<div className="w-full h-fit mx-auto flex justify-between items-center gap-4">
			<div className="w-[45%] 2xl:w-[42%]">
				<h1 className="mb-4 font-bold text-4xl text-[#230B34]">
					List and grow your business  with just few clicks
				</h1>
				<p className="text-dark-gray text-lg font-medium">
					Eliminate manual work and save time by listing your business or
					service on the best business directory in Nigeria.
				</p>
			</div>

			<div>
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
