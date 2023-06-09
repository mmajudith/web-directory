import { servicesData } from '@/servicesData';
import GetStarted from './reuseableComp/GetStarted';

const FeaturesService = ({ data }) => {
	const basic = [...data[2].features].map((el) =>
		data[0].features.includes(el)
	);
	const standard = [...data[2].features].map((el) =>
		data[1].features.includes(el)
	);
	const premium = [...data[2].features].map((el) =>
		data[2].features.includes(el)
	);

	return (
		<table className="w-full mx-auto mt-20 border-collapse">
			<thead className="">
				<tr className="">
					<th className=" pb-6 text-left w-[25%] relative bottom-[-30px] text-[#656565] font-semibold text-xl">
						Features & Services
					</th>

					<th className="px-6 pb-6 ">
						<p className="mb-6 text-left">Basic</p>
						<GetStarted text={'Get started'} link={'/register'} />
					</th>

					<th className="px-6 pb-6 ">
						<p className="mb-6 text-left">Standard</p>
						<GetStarted text={'Get started'} link={'/register'} />
					</th>

					<th className=" pb-6 ">
						<p className="mb-6 text-left">Premium</p>
						<GetStarted text={'Get started'} link={'/register'} />
					</th>
				</tr>
			</thead>

			<tbody className="">
				<tr className="">
					<td className="text-[#656565] font-meduim text-base">
						{servicesData.map((service, index) => (
							<p key={index} className="pb-4">
								{service}
							</p>
						))}
					</td>
					<td className="">
						{basic &&
							basic.map((el, index) => (
								<div className="flex flex-col justify-center items-center pb-4">
									<img
										key={index}
										src={`${
											el
												? `/assets/purple-good-mark.png`
												: `/assets/cancel-icon.png`
										}`}
										alt="icons"
									/>
								</div>
							))}
					</td>
					<td className="">
						{standard &&
							standard.map((el, index) => (
								<div className="flex flex-col justify-center items-center pb-4">
									<img
										key={index}
										src={`${
											el
												? `/assets/purple-good-mark.png`
												: `/assets/cancel-icon.png`
										}`}
										alt="icons"
									/>
								</div>
							))}
					</td>
					<td className="">
						{premium &&
							premium.map((el, index) => (
								<div className="flex flex-col justify-center items-center pb-4">
									<img
										key={index}
										src={`${
											el
												? `/assets/purple-good-mark.png`
												: `/assets/cancel-icon.png`
										}`}
										alt="icons"
									/>
								</div>
							))}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default FeaturesService;
