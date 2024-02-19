const Popular = () => {
	return (
		<div className="w-full h-auto m-auto bg-gradient-to-bl py-12 from-[#12022F] from-55% to-[#BB0BC8]">
			<h2 className="text-4xl font-bold text-center mb-12 text-white">
				Popular
			</h2>
			<div className="w-5/6 h-fit m-auto flex flex-row flex-wrap justify-center items-center gap-9">
				{[
					['/assets/battle-fly.png'],
					['/assets/yamakasi.png'],
					['/assets/future-army.png'],
				].map(([image], index) => (
					<img
						key={index}
						src={image}
						alt="Game players"
						className="w-[331px] h-[450px]"
					/>
				))}
			</div>
		</div>
	);
};

export default Popular;
