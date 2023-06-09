const Card = ({ title, descriptions, imgIcon, discovered }) => {
	return (
		<div
			className={`w-[400px] ${
				discovered ? `px-5 py-3 rounded-[26px]` : `px-5 pt-9 pb-5 rounded-xl`
			} bg-white  border border-solid border-[#EEEEFF] shadow-[8px_11px_20px_rgba(234,229,240,0.25)]`}
		>
			<div
				className={`w-full flex ${
					discovered
						? `flex-col items-start gap-2 mb-2`
						: `flex-row justify-center items-center gap-5 mb-5`
				}  `}
			>
				<img src={imgIcon} alt="icon" className="" />
				<p className="font-semibold text-xl text-[#1E1E4B]">{title}</p>
			</div>

			<p
				className={`text-base ${
					discovered ? `text-left` : `text-center`
				} text-[#1E1E4B]`}
			>
				{descriptions}
			</p>
		</div>
	);
};

export default Card;
