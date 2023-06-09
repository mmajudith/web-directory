import NavItems from './NavItems';
import Social from './Social';

const Footer = () => {
	return (
		<footer className="w-full h-fit mx-auto mt-20 mb-0 py-8 bg-purple-dark">
			<div className="max-w-[1440px] w-11/12 mx-auto">
				<div className="w-full flex justify-between gap-3 pb-8 pt-2">
					<NavItems title={'Company'} lists={['About', 'Contact us', 'FAQs']} />

					<NavItems
						title={'Quick links'}
						lists={['Find services', 'Pricing & plans', 'List your business']}
					/>

					<NavItems title={'Resources'} lists={['Blog', 'Affiliate program']} />

					<NavItems title={'More from Dutiful'} lists={['Dutiful jobs']} />
				</div>

				<Social />

				<div className="w-full flex items-center gap-16 mt-3">
					<p className="text-white text-base">© 2022 Dutiful®</p>
					<div className="text-[#B6B6E5] flex gap-5 text-sm">
						<p>Terms of Service</p>
						<p>Privacy policy</p>
						<p>Disclaimer</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
