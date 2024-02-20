'use client';

import { useSelector } from 'react-redux';

const GameChanging = () => {
	const { isAddress } = useSelector((state) => state.modalSlice);
	return (
		<div className="w-full m-auto h-[600px] flex flex-col justify-center items-center bg-[url('/assets/header-bg-img.png')] bg-no-repeat">
			<div className="w-11/12 mx-auto flex flex-col justify-start gap-10">
				<h1 className=" w-[45%] text-white text-5xl leading-tight">
					Enter The Game Changing Experience Of Decentralized Prediction Play.
				</h1>
				{isAddress && (
					<p className="w-[180px] h-[45px] ml-7 rounded-lg bg-gradient-to-t from-[#12022F] to-[#1C004E] text-lg font-medium text-white flex flex-col justify-center items-center">
						Start Staking
					</p>
				)}
			</div>
		</div>
	);
};

export default GameChanging;
