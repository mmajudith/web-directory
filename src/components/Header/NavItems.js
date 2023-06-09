import Link from 'next/link';

const NavItems = () => {
	return (
		<ul className="flex gap-10 text-[#686868] text-[17px]">
			{[
				['Business Directory'],
				['Features', '/'],
				['Pricing', '/pricing'],
				['Blog'],
			].map(([list, url], index) => (
				<li key={index}>{url ? <Link href={`${url}`}>{list}</Link> : list}</li>
			))}
		</ul>
	);
};

export default NavItems;
