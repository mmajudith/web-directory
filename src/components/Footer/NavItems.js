import Link from 'next/link';

const NavItems = ({ title, lists }) => {
	return (
		<div className="">
			<p className="font-medium text-lg text-white text-center sm:text-left mb-4 sm:mb-6">
				{title}
			</p>

			<ul className="text-[#B6B6E6] flex flex-col items-center sm:items-baseline gap-3 text-sm">
				{lists.map((list, index) => (
					<li key={index}>
						{list === 'Contact us' ? (
							<Link href="/contact-us">{list}</Link>
						) : (
							list
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavItems;
