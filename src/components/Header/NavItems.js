import Link from 'next/link';

const NavItems = ({ toggleMenu, screenWidth }) => {
	return (
		<ul
			className={`flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 
					xl:gap-10 text-white md:text-[#686868] text-base lg:text-[17px] font-medium md:font-normal`}
		>
			{[
				['Business Directory'],
				['Features', '/'],
				['Pricing', '/pricing'],
				['Contact us', '/contact-us'],
			].map(([list, url], index) => (
				<li key={index}>
					{url ? (
						<Link href={`${url}`} className="hover:text-[#230b34]">
							{list}
						</Link>
					) : (
						<span className="text-gray-300">{list}</span>
					)}
				</li>
			))}
		</ul>
	);
};

export default NavItems;
