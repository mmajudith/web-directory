import ListBusiness from '@/components/ListBusiness';
import CollectRatings from '@/components/CollectRatings';
import GetDiscovered from '@/components/GetDiscovered';
import AcceptAppointment from '@/components/AcceptAppointment';

export default function Home() {
	return (
		<main className="w-full h-fit mx-auto mt-20">
			<div className="max-w-[1440px] w-[95%] xl:w-11/12 h-fit mx-auto overflow-x-visible xl:overflow-x-hidden">
				<ListBusiness />
				<CollectRatings />
				<GetDiscovered />
				<AcceptAppointment />
			</div>
		</main>
	);
}
