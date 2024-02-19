import { topWinners } from '@/dummy-data/topWinners';

const TopWinners = () => {
	return (
		<div className="w-11/12 h-auto m-auto py-10 text-white">
			<h2 className="w-full m-auto text-4xl font-bold text-center">
				Top Winners
			</h2>
			<div className="w-5/6 h-fit m-auto pt-10 flex flex-row flex-wrap justify-center items-center gap-9">
				{topWinners.map((topWinner, index) => (
					<div
						key={index}
						className="w-[310px] h-[220px] p-5 border border-[#BB0BC8] border-solid rounded-xl bg-gradient-to-t from-[#12022F] to-[#1C004E]
							flex flex-col justify-between gap-5"
					>
						<div className="w-full flex flex-row justify-start items-center gap-4">
							<img
								src={topWinner.avatar}
								alt="user avatar"
								className="w-[40px] h-[40px]"
							/>
							<p>{topWinner.address}</p>
						</div>

						<div className="">
							<p className="text-[#B8B8B8] text-xs mb-2">Best bet</p>
							<p>
								<span className="w-[26px] h-[26px] mr-2 text-center rounded-full font-semibold inline-block bg-[#26A17B]">
									T
								</span>
								{topWinner.bestBet}
							</p>
						</div>

						<div className="w-full flex flex-row justify-between items-center">
							<div className="">
								<p className="text-[#B8B8B8] text-xs mb-2">Results</p>
								<p>${topWinner.result}</p>
							</div>
							<p className="w-[68px] h-[26px] text-center text-[#11D94F] bg-[#0b5a3b] rounded-xl self-end">
								+{topWinner.betPercent}%
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TopWinners;
