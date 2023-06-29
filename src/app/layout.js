import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
	title: 'Dutiful',
	description: 'Business directory app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`w-full text-base font-kumbh font-normal bg-white not-italic`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
