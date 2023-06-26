'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NavItems from './NavItems';

const Header = () => {
	const pathname = usePathname();

	const [toggleMenu, setToggleMenu] = useState(false);
	const [screenWidth, setScreenWidth] = useState(0);

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu);
	};

	const handleWindowResize = () => {
		setScreenWidth(window.innerWidth);
	};

	useEffect(() => {
		handleWindowResize();
		window.addEventListener('resize', handleWindowResize);

		return window.addEventListener('resize', handleWindowResize);
	}, [screenWidth]);

	return (
		<header className="w-full h-auto md:h-20 mx-auto mt-6 md:mt-0">
			<nav
				className="max-w-[1440px] w-[95%] xl:w-11/12 h-full mx-auto flex flex-col md:flex-row 
					justify-center md:justify-between items-center gap-8 md:gap-2"
			>
				<div className="w-full md:w-fit flex justify-between items-center">
					<img
						src="/assets/logo.png"
						alt="site logo"
						className="w-28 md:w-fit h-12 md:h-fit"
					/>
					<img
						onClick={handleToggleMenu}
						src="/assets/ham-menu.svg"
						alt="hamburger menu"
						className="block md:hidden cursor-pointer"
					/>
				</div>

				<div
					className={`w-full md:w-10/12 xl:w-2/3 flex flex-col md:flex-row justify-center md:justify-between
								items-center gap-8 md:gap-2 py-8 md:py-0 bg-purple-dark md:bg-white rounded-md 
								md:rounded-none ${toggleMenu ? `flex` : screenWidth > 783 ? `flex` : `hidden`}`}
				>
					<div className="hidden md:block cursor-text">
						{pathname === '/' && (
							<img src="/assets/Search.png" alt="search icon" />
						)}
						{pathname === '/pricing' && (
							<img src="/assets/Search.png" alt="search icon" />
						)}
						{pathname === '/contact-us' && (
							<img src="/assets/Search.png" alt="search icon" />
						)}
					</div>

					<NavItems toggleMenu={toggleMenu} screenWidth={screenWidth} />

					<div
						className={`w-full md:w-fit flex flex-col md:flex-row justify-center md:justify-between
							items-center gap-4 xl:gap-10 font-medium text-lg`}
					>
						<Link
							href="/login"
							className="text-white md:text-[#1E1E4B] hover:text-[#230b34]"
						>
							Login
						</Link>

						<Link
							href="/register"
							className="w-11/12 md:w-28 lg:w-36 h-12 text-white md:text-purple flex flex-col justify-center items-center 
								border border-solid border-[#ddd] md:border-purple rounded hover:bg-violet-500 md:hover:bg-white"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
