import { Nunito } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const nunito = Nunito({
	weight: ['300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
	variable: '--font-nunito',
});

export const metadata = {
	title: 'Dutiful',
	description: 'Business directory app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${nunito.className} w-full text-base font-normal bg-white not-italic`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
