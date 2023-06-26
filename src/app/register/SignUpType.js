import { useState } from 'react';

const SignUpType = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="w-full h-fit mt-6 mb-6 sm:mb-10 relative flex flex-row justify-between gap-4">
			<img
				src="/assets/check.png"
				alt="purple check icon"
				className={`w-fit h-fit hidden xs:block absolute ${
					!isActive ? `top-[-20px] left-[172px]` : `top-[-20px] right-[-20px]`
				}`}
			/>

			<div
				onClick={() => setIsActive(false)}
				className={`w-[45%] xs:w-48 h-14 xs:h-20 flex justify-around items-center gap-2 border border-solid ${
					!isActive ? `border-purple` : `border-[#EEEEFF]`
				} cursor-pointer rounded-xl px-1 xs:px-0`}
			>
				{!isActive ? (
					<img src="/assets/profile-active.png" alt="active profile icon" />
				) : (
					<img src="/assets/profile-unactive.png" alt="unactive profile icon" />
				)}

				<p
					className={`font-medium text-sm xs:text-base ${
						!isActive ? `text-[#230B34]` : `text-[#B1BDCA]`
					}`}
				>
					Regular user
				</p>
			</div>

			<div
				onClick={() => setIsActive(true)}
				className={`w-[45%] xs:w-48 h-14 xs:h-20 flex justify-around items-center gap-2 border border-solid ${
					isActive ? `border-purple` : `border-[#EEEEFF]`
				} cursor-pointer rounded-xl px-1 xs:px-0`}
			>
				{isActive ? (
					<img src="/assets/store-active.png" alt="active store icon" />
				) : (
					<img src="/assets/store-unactive.png" alt="unactive store icon" />
				)}

				<p
					className={`font-medium text-sm xs:text-base ${
						isActive ? `text-[#230B34]` : `text-[#B1BDCA]`
					}`}
				>
					Service provider
				</p>
			</div>
		</div>
	);
};

export default SignUpType;
