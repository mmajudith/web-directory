const Features = () => {
	return (
		<div className="w-11/12 h-auto m-auto py-9 flex flex-row-reverse justify-between items-center">
			<div className="w-[45%] flex flex-col justify-start">
				<h2 className="text-4xl font-bold text-white mb-8">Features</h2>
				<ul className="flex flex-col gap-4">
					{[
						['Outcome Determination'],
						['Decentralized Oracle Integration'],
						['Automated Payouts'],
						['Diverse Prediction Categories'],
					].map(([list], index) => (
						<li
							key={index}
							className="p-4 text-white border border-[#BB0BC8] border-solid rounded-xl"
						>
							{list}
						</li>
					))}
				</ul>
			</div>
			<div className="w-[48.5%] h-[450px] relative">
				<img
					src="/assets/medium-short-man.png"
					className="w-[380px] h-[370px] absolute left-0 top-0"
				/>
				<img
					src="/assets/cyber-punk-man.png"
					className="w-[340px] h-[340px] absolute bottom-0 right-0"
				/>
				<img
					src="/assets/hottest-games.png"
					className="w-[200px] h-[80px] absolute bottom-[30px] left-[25%]"
				/>
			</div>
		</div>
	);
};

export default Features;
