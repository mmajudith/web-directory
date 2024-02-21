import Link from 'next/link';

const DashboardNav = ({ address }) => {
	return (
		<div className="w-full h-fit m-auto">
			<div className="w-full h-[60px] p-10 flex flex-row justify-between items-center bg-[#12022F]">
				<div className="flex flex-row justify-center items-center gap-5">
					<Link href={'/'}>
						<img src="/assets/dashboard-logo.png" alt="dashboard logo" />
					</Link>

					<input
						type="text"
						className="w-[220px] h-[30px] rounded-lg text-[#12022F] border-none outline-none pl-[1.6rem] bg-[url('/assets/search-icon.png')] bg-no-repeat bg-[center_left_0.5rem]"
					/>
				</div>

				<div className="flex flex-row justify-center items-center gap-5">
					<p className=" w-36 h-10 flex flex-col justify-center items-center text-white bg-gradient-to-t from-[#C80B66] from-85% to-[#FFFFFF] rounded-lg">
						{address
							.substring(0, 5)
							.concat('...')
							.concat(address.substring(38))}
					</p>
					<div className="flex flex-row justify-center items-center gap-2">
						<img src="/assets/user-avatar.png" alt="user avatar" />
						<img src="/assets/down-arrow-icon.png" alt="down arrow icon" />
					</div>
				</div>
			</div>

			<ul className="w-full h-[60px] px-10 flex flex-row justify-start items-center gap-8 bg-[#C80B66]">
				{[
					['Dashboard', '/assets/dash-icon.png', '/dashboard'],
					['Profile', '/assets/user-icon-2.png', ''],
					['Recent Activities', '/assets/timer-icon.png', ''],
					['Withdrawals', '/assets/withdraw.png', ''],
					['Live Events', '/assets/network-icon.png', ''],
				].map(([list, image, url], index) => (
					<li key={index}>
						<Link
							href={`${url}`}
							className="w-fit h-[32px] p-4 bg-[#12022F] rounded-2xl flex flex-row justify-center items-center gap-1 text-sm text-[#B8B8B8]"
						>
							<img src={image} alt="" />
							<span>{list}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DashboardNav;
