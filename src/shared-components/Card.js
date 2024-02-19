const Card = ({ title, description, bgImg }) => {
	return (
		<div
			style={{ backgroundImage: `url(${bgImg})` }}
			className="w-[331px] h-[198px] border border-[#BB0BC8] border-solid rounded-xl bg-[#1C004E]
					bg-no-repeat bg-right-bottom px-5 py-4 text-left"
		>
			<p className="text-xl font-medium mb-3">{title}</p>
			<p className=" w-2/3">{description}</p>
		</div>
	);
};

export default Card;
