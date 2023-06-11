import { getData } from '@/dataFetching/dataFetching';
import SubscriptionPlan from '@/components/SubscriptionPlan';
import FeaturesService from '@/components/FeaturesServices';

export default async function Pricing() {
	const { data } = await getData('plans');

	return (
		<main className="w-full h-fit mx-auto mt-20">
			<div className="max-w-[1440px] w-11/12 h-fit mx-auto mb-14 text-center">
				<h1 className="mb-2 font-bold text-3xl text-[#1E1E4B]">
					Plans to Suit Your Business Budget
				</h1>
				<p className="w-[55%] mx-auto text-[#656565] text-base text-center">
					Our fully organized plans deliver valuable content that showcases your
					services and skills, drives Lead, covers all features, and gives
					customers a clear idea to be able to choose your services.
				</p>
			</div>

			<div className="max-w-[1440px] h-fit mx-auto py-20 bg-[#FCFAFF]">
				<div className="w-11/12 m-auto flex justify-between gap-3">
					{data &&
						data.map((subPlan) => (
							<SubscriptionPlan key={subPlan.id} subPlan={subPlan} />
						))}
				</div>

				<div className="w-11/12 m-auto text-black">
					<p className="my-10 text-3xl text-left font-semibold">
						Features Overview
					</p>

					{data && <FeaturesService data={data} />}
				</div>
			</div>
		</main>
	);
}
