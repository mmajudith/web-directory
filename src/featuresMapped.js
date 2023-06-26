import { servicesData } from './servicesData';

export const featuresMapped = (features, subsPlan) => {
	return servicesData.map((el, i, arr) => {
		// const regex = /[^0-9]/g;

		// if (subsPlan === 'premium') {
		// 	if (+features[i].replace(regex, '') <= +arr[i].replace(regex, '')) {
		// 		return features[i].replace(/^\D+/g, '');
		// 	}
		// }

		if (features.includes(el)) {
			return true;
		}

		return false;
		// if (!features.includes(el)) {
		// 	if (
		// 		features[i] !== undefined &&
		// 		+features[i].replace(regex, '') <= +arr[i].replace(regex, '')
		// 	) {
		// 		return features[i].replace(/^\D+/g, '');
		// 	}
		// 	return false;
		// }
	});
};
