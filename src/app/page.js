import GameChanging from '@/components/game-changing/GameChanging';
import TotalProgress from '@/shared-components/TotalProgress';
import { totalProgress } from '@/dummy-data/totalProgress';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import Features from '@/components/features/Features';
import Popular from '@/components/popular/Popular';
import TopWinners from '@/components/top-winners/TopWinners';
import LatestBet from '@/components/latest-bet/LatestBet';

export default function Home() {
	return (
		<main className="max-w-[1440px] w-full h-fit mx-auto bg-[#12022F]">
			<GameChanging />
			<div className="w-full h-auto m-auto py-14">
				<div className="w-3/4 m-auto py-5 flex flex-row justify-around items-center border border-[#BB0BC8] border-solid rounded-lg">
					{totalProgress.map((progress, index) => (
						<TotalProgress key={index} progress={progress} />
					))}
				</div>
			</div>
			<HowItWorks />
			<Features />
			<Popular />
			<TopWinners />
			<LatestBet />
		</main>
	);
}
