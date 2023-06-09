'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavItems from './NavItems';

const Header = () => {
	const pathname = usePathname();

	return (
		<header className="w-full h-20 mx-auto">
			<nav className="max-w-[1440px] w-11/12 h-full mx-auto flex flex-row justify-between items-center">
				<img src="/assets/logo.png" alt="site logo" />

				<div className="w-2/3 flex justify-between items-center">
					{pathname === '/' && (
						<img src="/assets/Search.png" alt="search icon" />
					)}
					{pathname === '/pricing' && (
						<img src="/assets/Search.png" alt="search icon" />
					)}
					{pathname === '/contact-us' && (
						<img src="/assets/Search.png" alt="search icon" />
					)}

					<NavItems />

					<div className="flex items-center gap-10 ml-2 font-medium text-lg">
						<Link href="/login" className="text-[#1E1E4B]">
							Login
						</Link>

						<Link
							href="/register"
							className="w-36 h-12 text-purple flex flex-col justify-center items-center border border-solid border-purple rounded"
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
