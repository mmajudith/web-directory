import Link from 'next/link';

const RootNav = ({
	isAddress,
	address,
	connectMetamask,
	disconnectMetamask,
}) => {
	return (
		<nav className="w-3/4 h-[60px] px-6 flex flex-row justify-between items-center bg-[#12022F] rounded-lg">
			<img src="/assets/logo.svg" alt="site logo" />

			<ul className="flex flex-row gap-6 text-white text-lg">
				{[
					['Home', '/'],
					['Categories', '/'],
					[`${isAddress ? `dashboard` : ''}`, '/dashboard'],
				].map(([list, url], index) => (
					<li key={index}>
						<Link href={`${url}`}>{list}</Link>
					</li>
				))}
			</ul>

			<div className="flex flex-row justify-center items-center gap-6">
				{isAddress ? (
					<p className=" w-36 h-11 flex flex-col justify-center items-center text-white bg-gradient-to-t from-[#C80B66] from-85% to-[#FFFFFF] rounded-lg">
						{address
							.substring(0, 5)
							.concat('...')
							.concat(address.substring(38))}
					</p>
				) : (
					<p
						onClick={connectMetamask}
						className=" w-36 h-11 flex flex-col justify-center items-center text-white bg-gradient-to-t from-[#C80B66] from-85% to-[#FFFFFF] rounded-lg cursor-pointer"
					>
						Connect Wallet
					</p>
				)}

				{isAddress && (
					<img
						onClick={disconnectMetamask}
						className="cursor-pointer"
						src="/assets/right-arrow.png"
						alt="right arrow icon"
					/>
				)}
			</div>
		</nav>
	);
};

export default RootNav;
