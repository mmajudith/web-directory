import { servicesData } from '@/servicesData';
import GetStarted from './reuseableComp/GetStarted';

const FeaturesService = ({ data }) => {
	const basic = [...data[0].features];
	// .map((el) =>
	// 	data[0].features.includes(el)
	// );
	const standard = [...data[1].features];
	// .map((el) =>
	// 	data[1].features.includes(el)
	// );
	const premium = [...data[2].features];
	// .map((el) =>
	// 	data[2].features.includes(el)
	// );

	console.log(basic, 'basic');
	console.log(standard, 'standard');
	console.log(premium, 'premium');

	return (
		<table className="w-full m-auto border-collapse gap-4">
			<thead className="">
				<tr>
					<th>Features & Services</th>
					<th>
						<p>Basic</p>
						<GetStarted text={'Get started'} link={'/register'} />
					</th>
					<th>
						<p>Standard</p>
						<GetStarted text={'Get started'} link={'/register'} />
					</th>
					<th>
						<p>Premium</p>
						<GetStarted text={'Get started'} link={'/register'} />
					</th>
				</tr>
			</thead>

			<tbody className="">
				<tr>
					<td className="">
						{servicesData.map((service, index) => (
							<p key={index} className="">
								{service}
							</p>
						))}
					</td>
					<td className="">
						{basic &&
							basic.map((el, index) => (
								<img
									key={index}
									src={`${
										el
											? `/assets/purple-good-mark.png`
											: `/assets/cancel-icon.png`
									}`}
									alt="icons"
								/>
							))}
					</td>
					<td className="">
						{standard &&
							standard.map((el, index) => (
								// <img
								// 	key={index}
								// 	src={`${
								// 		el
								// 			? `/assets/purple-good-mark.png`
								// 			: `/assets/cancel-icon.png`
								// 	}`}
								// 	alt="icons"
								// />
								<p>{el}</p>
							))}
					</td>
					<td className="">
						{premium &&
							premium.map((el, index) => (
								<img
									key={index}
									src={`${
										el
											? `/assets/purple-good-mark.png`
											: `/assets/cancel-icon.png`
									}`}
									alt="icons"
								/>
							))}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default FeaturesService;
