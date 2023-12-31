import Image from 'next/image';
import GetStarted from '../../components/reuseableComp/GetStarted';

const SubscriptionPlan = ({ subPlan }) => {
	const { name, price, duration_type, features } = subPlan;

	return (
		<div className="w-full xs:w-3/4 md:w-[calc(100%_/_3)] lg:w-[calc(90%_/_3)] bg-white rounded-lg px-4 py-10">
			<p className="text-black text-2xl md:text-lg text-center md:text-left font-semibold">
				{name}
			</p>

			{price === 0 ? (
				<p className="my-7 text-black text-4xl text-center md:text-left font-bold">
					Free
				</p>
			) : (
				<p className="my-7 text-black text-center md:text-left">
					<span className="text-sm relative bottom-5">NGN</span>
					<span className=" text-4xl font-bold">
						{price.toLocaleString()}
					</span>{' '}
					<span className="text-sm">{`/${duration_type}`}</span>
				</p>
			)}

			<GetStarted text={'Get started'} link={'/register'} />

			<ul className="mt-8">
				{features &&
					features.map((feature, index) => (
						<li
							key={index}
							className="flex justify-start items-center gap-4 mb-5 text-base text-[#656565] font-medium"
						>
							<Image
								src="/assets/good-mark-icon.png"
								alt="good mark icon"
								width={16}
								height={11}
							/>
							<p>{feature}</p>
						</li>
					))}
			</ul>
		</div>
	);
};

export default SubscriptionPlan;
