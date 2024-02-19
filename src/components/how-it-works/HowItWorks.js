import Card from '@/shared-components/Card';

const HowItWorks = () => {
	return (
		<div className="w-full h-auto m-auto text-white bg-gradient-to-br from-[#12022F] from-55% to-[#BB0BC8]">
			<h2 className="text-4xl font-bold text-center mt-7">How It Works</h2>
			<div className="w-5/6 h-fit m-auto py-10 flex flex-row flex-wrap justify-center items-center gap-9">
				<Card
					title={'Create an Account'}
					description={'Sign up and connect your wallet.'}
					bgImg={'/assets/solar-wallet.png'}
				/>
				<Card
					title={'Choose a Market'}
					description={'Pick a prediction market that interests you'}
					bgImg={'/assets/tabler-game.png'}
				/>
				<Card
					title={'Stake Your Tokens'}
					description={'Put your tokens where your predictions are.'}
					bgImg={'/assets/ph-coin.png'}
				/>
				<Card
					title={'Outcome Determination'}
					description={'Our decentralized oracles ensure fair outcomes.'}
					bgImg={'/assets/tdesign-blockchain.png'}
				/>
				<Card
					title={'Get Rewarded'}
					description={
						"If your predictions are accurate, you'll receive rewards directly through smart contracts."
					}
					bgImg={'/assets/grommet-icons-money.png'}
				/>
			</div>
		</div>
	);
};

export default HowItWorks;
