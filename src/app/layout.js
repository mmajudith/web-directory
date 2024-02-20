'use client';

import './globals.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
	title: 'Dutiful',
	description: 'Business directory app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="max-w-[1440px] w-full h-auto m-auto text-base font-kumbh font-normal bg-white not-italic">
				<Provider store={store}>
					<Header />
					{children}
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
