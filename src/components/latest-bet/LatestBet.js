import { latestBets } from '@/dummy-data/latestBet';

const LatestBet = () => {
	return (
		<div className="w-11/12 h-auto m-auto py-10 text-white">
			<h2 className="w-full text-4xl font-bold text-left mt-7">Latest Bet</h2>
			<div className="w-full h-fit m-auto py-10 flex flex-col justify-center items-center gap-9">
				{latestBets.map((latestBet, index) => (
					<div
						key={index}
						className="w-full h-[90px] m-auto px-5 rounded-2xl flex flex-row justify-between items-center bg-[#1B014A]"
					>
						<img src={latestBet.avatar} alt="user avatar" />
						<p>{latestBet.address}</p>
						<p>{latestBet.eSport}</p>
						<p>{latestBet.smartTelemath}</p>
						<p>
							<span className="w-[26px] h-[26px] mr-2 text-center rounded-full font-semibold inline-block bg-[#26A17B]">
								T
							</span>
							{latestBet.bestBet}
						</p>
						<p>{latestBet.time}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default LatestBet;
