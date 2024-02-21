'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAddress } from '@/redux/features/utilitiesReducer';
import { Web3 } from 'web3';
import RootNav from './root-Nav/RootNav';
import DashboardNav from './dashboard-nav/DashboardNav';

const Header = () => {
	const pathName = usePathname();
	const { isAddress } = useSelector((state) => state.modalSlice);
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
		<header className="w-full h-auto m-auto">
			{pathName === '/' ? (
				<div className="w-full h-24 m-auto flex flex-col justify-center items-center bg-[url('/assets/nav-bg-img.png')] bg-no-repeat">
					<RootNav
						isAddress={isAddress}
						address={address}
						connectMetamask={connectMetamask}
						disconnectMetamask={disconnectMetamask}
					/>
				</div>
			) : (
				<DashboardNav address={address} />
			)}
		</header>
	);
};

export default Header;
