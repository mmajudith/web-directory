'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAddress } from '@/redux/features/utilitiesReducer';
import { Web3 } from 'web3';

const Header = () => {
	const { isAddress } = useSelector((state) => state.modalSlice);
	console.log(isAddress, 'adrrrrrrrrrrrrr')
	const [address, setAddress] = useState('');
	const dispatch = useDispatch();

	const connectMetamask = async () => {
		if (window.ethereum) {
			const web3 = new Web3(window.ethereum);
			await window.ethereum.request({ method: 'eth_requestAccounts' });

			const accounts = await web3.eth.getAccounts();
			setAddress(accounts[0]);
			dispatch(setIsAddress(true));
		} else {
			alert('Please add metamask to your browser');
		}
	};

	const disconnectMetamask = async () => {
		await window.ethereum.request({
			method: 'eth_requestAccounts',
			params: [{ eth_accounts: {} }],
		});

		setAddress('');
		dispatch(setIsAddress(false));
	};

	return (
		<header className="w-full h-24 m-auto flex flex-col justify-center items-center bg-[url('/assets/nav-bg-img.png')] bg-no-repeat">
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
						<p className=" w-36 h-11 flex flex-col justify-center items-center text-white bg-gradient-to-t from-[#BB0BC8] from-85% to-[#FFFFFF] rounded-lg">
							{address
								.substring(0, 5)
								.concat('...')
								.concat(address.substring(38))}
						</p>
					) : (
						<p
							onClick={connectMetamask}
							className=" w-36 h-11 flex flex-col justify-center items-center text-white bg-gradient-to-t from-[#BB0BC8] from-85% to-[#FFFFFF] rounded-lg cursor-pointer"
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
		</header>
	);
};

export default Header;
