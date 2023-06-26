const Social = () => {
	return (
		<div
			className="w-full h-fit flex flex-col sm:flex-row justify-center sm:justify-between items-center 
				py-7 border-t border-b border-solid border-t-[#63428E] border-b-[#63428E] text-white font-medium"
		>
			<div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-7">
				<p>Follow us</p>

				<div className="flex items-center gap-4 sm:gap-7">
					<img src="/assets/facebook-icon.png" alt="Facebook icon" />
					<img src="/assets/instagram.png" alt="instagrem icon" />
					<img src="/assets/twitter-icon.png" alt="Twitter icon" />
					<img src="/assets/youtube-icon.png" alt="YouTube icon" />
					<img src="/assets/linked-in-icon.png" alt="LinkedIn icon" />
				</div>
			</div>

			<div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-7 mt-6 sm:mt-0">
				<p>Download the app</p>

				<div className="flex items-center gap-4 sm:gap-7">
					<img src="/assets/apple-icon.png" alt="Apple play store icon" />
					<img src="/assets/play-icon.png" alt="Andriod store icon" />
				</div>
			</div>
		</div>
	);
};

export default Social;
