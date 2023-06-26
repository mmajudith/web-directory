const Card = ({ title, descriptions, imgIcon, discovered }) => {
	return (
		<div
			className={`w-full lg:w-[400px] bg-white  border border-solid border-[#EEEEFF] shadow-[8px_11px_20px_rgba(234,229,240,0.25)] ${
				discovered
					? `h-fit px-5 py-3 rounded-[26px]`
					: `xs:w-[calc(100%_/_3)] h-fit xs:h-[240px] md:h-[200px] px-3 lg:px-5 pt-9 pb-5 rounded-xl`
			}`}
		>
			<div
				className={`w-full flex ${
					discovered
						? `flex-col items-start gap-2 mb-2`
						: `flex-row justify-center items-center gap-2 lg:gap-5 mb-5`
				}  `}
			>
				<img src={imgIcon} alt="icon" className="w-8 lg:w-fit h-8 lg:h-fit" />
				<p className="font-semibold text-lg lg:text-xl text-[#1E1E4B]">
					{title}
				</p>
			</div>

			<p
				className={`text-sm lg:text-base ${
					discovered ? `text-left` : `text-center`
				} text-[#1E1E4B]`}
			>
				{descriptions}
			</p>
		</div>
	);
};

export default Card;
