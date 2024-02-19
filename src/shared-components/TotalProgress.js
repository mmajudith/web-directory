const TotalProgress = ({ progress }) => {
	const { name, totalNumber, image, alt } = progress;
	return (
		<div className="flex flex-col justify-center items-center gap-2 text-white">
			<p className="text-5xl">{totalNumber}</p>
			<div className="flex flex-row gap-2">
				<img src={image} alt={alt} />
				<p>{name}</p>
			</div>
		</div>
	);
};

export default TotalProgress;
