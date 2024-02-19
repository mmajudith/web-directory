import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export const metadata = {
	title: 'Dutiful',
	description: 'Business directory app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`max-w-[1440px] w-full h-auto m-auto text-base font-kumbh font-normal bg-white not-italic`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
