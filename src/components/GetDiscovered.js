import Image from 'next/image';
import Card from './reuseableComp/Card';

const GetDiscovered = () => {
	return (
		<div className="w-full h-auto mx-auto my-20 py-3 xl:py-5 bg-[#FCFAFF] rounded-[24px]">
			<div className="w-full mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center relative">
				<div className="w-full md:w-2/3 xl:w-fit flex flex-col justify-center items-center">
					<Image
						src="/assets/phone.png"
						alt="dutiful mobile phone"
						width={1073}
						height={852}
						priority
					/>
				</div>

				<div className="w-full xs:w-3/4 sm:w-1/2 xl:w-full my-auto h-fit relative xl:absolute xl:left-[720px] xl:inset-y-0 overscroll-none">
					<div className="w-full xl:w-fit my-auto h-fit flex flex-col items-center gap-7 md:gap-5">
						<Card
							title={'Get Discovered'}
							descriptions={
								'Dutiful is more than just a business directory; it also enhances your web profile. The platform makes use of SEO techniques to boost each listing’s performance in the SERPs, providing any business the chance to rank, regardless of how strong their current online presence is.'
							}
							imgIcon={'/assets/discover.png'}
							discovered={'discovered'}
						/>

						<div className="relative sm:left-[-85px] z-10">
							<Card
								title={'Instant Chat'}
								descriptions={
									'You’ll be able to chat and send voice recordings with potential and existing customers, including managing your captured leads anytime, anywhere via the platform'
								}
								imgIcon={'/assets/messages.png'}
								discovered={'discovered'}
							/>
						</div>

						<Card
							title={'Quotations'}
							descriptions={
								'In addition to providing customers with access to information, offering customer quotations is very advantageous to the way you conduct your business. On Dutiful, you’ll be able to send and receive quotation from customers - an important step in lead management.'
							}
							imgIcon={'/assets/quotation-icon.png'}
							discovered={'discovered'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetDiscovered;
