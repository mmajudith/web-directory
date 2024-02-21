'use client';

import { usePathname } from 'next/navigation';

const Footer = () => {
	const pathName = usePathname();
	return (
		<>
			{pathName === '/' && (
				<footer className="w-full m-auto py-12 bg-gradient-to-t from-[#12022F] to-[#1C004E] flex flex-col justify-center items-center">
					<img src="/assets/logo.svg" alt="site logo" />
					<div className="mt-4 flex flex-row justify-center items-center gap-6">
						<img src="/assets/telegram-icon.png" alt="site logo" />
						<img src="/assets/discord-icon.png" alt="site logo" />
					</div>
				</footer>
			)}
		</>
	);
};

export default Footer;
