const Header = () => {
	return (
		<header className="w-full h-24 m-auto flex flex-col justify-center items-center bg-[url('/assets/nav-bg-img.png')] bg-no-repeat">
			<nav className="w-3/4 h-[60px] px-6 flex flex-row justify-between items-center bg-[#12022F] rounded-lg">
				<img src="/assets/logo.svg" alt="site logo" />

				<ul className="flex flex-row gap-6 text-white text-lg">
					{[['Home'], ['Categories']].map(([list], index) => (
						<li key={index}>{list}</li>
					))}
				</ul>

				<p className=" w-36 h-11 flex flex-col justify-center items-center bg-[#BB0BC8] rounded-lg cursor-pointer">
					Connect Wallet
				</p>
			</nav>
		</header>
	);
};

export default Header;
