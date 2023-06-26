import { servicesData } from '@/servicesData';
import { featuresMapped } from '@/featuresMapped';
import GetStarted from '../../components/reuseableComp/GetStarted';

const FeaturesService = ({ data }) => {
	const basic = featuresMapped(data[0].features, 'basic');
	const standard = featuresMapped(data[1].features, 'standard');
	const premium = featuresMapped(data[2].features, 'premium');

	return (
		<table
			cellPadding={0}
			cellSpacing={0}
			className="w-full mx-auto mt-20 border-collapse block md:flex md:flex-col overflow-y-auto"
		>
			<tbody className="w-[782px] md:w-full mx-auto block overflow-y-auto">
				<tr className="w-full mx-auto flex flex-row justify-between gap-5">
					<td className="w-[28%] pb-6 text-[#656565] font-semibold text-xl flex flex-col justify-end items-start pl-5">
						Features & Services
					</td>

					<td className="w-[24%] pb-6 ">
						<p className="mb-6 text-left text-black font-medium text-lg">
							Basic
						</p>
						<GetStarted text={'Get started'} link={'/register'} />
					</td>

					<td className="w-[24%] pb-6 ">
						<p className="mb-6 text-left text-black font-medium text-lg">
							Standard
						</p>
						<GetStarted text={'Get started'} link={'/register'} />
					</td>

					<td className="w-[24%] pb-6 ">
						<p className="mb-6 text-left text-black font-medium text-lg">
							Premium
						</p>
						<GetStarted text={'Get started'} link={'/register'} />
					</td>
				</tr>

				<tr className="w-full mx-auto flex flex-row justify-between border-hidden">
					<td className="w-[28%] text-[#656565] border-hidden font-meduim text-base [&>*:nth-child(odd)]:bg-white">
						{servicesData.map((service, index) => (
							<p
								key={index}
								className="h-14 flex flex-col justify-center items-start pl-5"
							>
								{service}
							</p>
						))}
					</td>
					<td className="w-[24%] [&>*:nth-child(odd)]:bg-white">
						{basic &&
							basic.map((el, index) => (
								<p
									key={index}
									className="h-14 flex flex-col justify-center items-center text-center"
								>
									{el === true ? (
										<img src={`/assets/purple-good-mark.png`} alt="icons" />
									) : el === false ? (
										<img src={`/assets/cancel-icon.png`} alt="icons" />
									) : (
										<span className="font-semibold text-black">{el}</span>
									)}
								</p>
							))}
					</td>
					<td className="w-[24%] [&>*:nth-child(odd)]:bg-white">
						{standard &&
							standard.map((el, index) => (
								<p
									key={index}
									className="h-14 flex flex-col justify-center items-center text-center"
								>
									{el === true ? (
										<img src={`/assets/purple-good-mark.png`} alt="icons" />
									) : el === false ? (
										<img src={`/assets/cancel-icon.png`} alt="icons" />
									) : (
										<span className="font-semibold text-black">{el}</span>
									)}
								</p>
							))}
					</td>
					<td className="w-[24%] [&>*:nth-child(odd)]:bg-white">
						{premium &&
							premium.map((el, index) => (
								<p
									key={index}
									className="h-14 flex flex-col justify-center items-center text-center"
								>
									{el === true ? (
										<img src={`/assets/purple-good-mark.png`} alt="icons" />
									) : el === false ? (
										<img src={`/assets/cancel-icon.png`} alt="icons" />
									) : (
										<span className="font-semibold text-black">{el}</span>
									)}
								</p>
							))}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default FeaturesService;
