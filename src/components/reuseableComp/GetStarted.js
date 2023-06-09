import Link from 'next/link';

const GetStarted = ({ text, link }) => {
	return (
		<button
			className={`w-full h-16 bg-purple-dark text-white cursor-pointer rounded-md shadow-[2px_8px_8px_rgba(86,86,86,0.25)]
			hover:opacity-60 cursor-pointer`}
		>
			<Link
				href={link}
				className="w-full h-full flex flex-col justify-center item-center"
			>
				{text}
			</Link>
		</button>
	);
};

export default GetStarted;
