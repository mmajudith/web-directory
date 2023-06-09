const baseURL = 'https://api.dutiful.ng/v2/';
const token = 'apiAuth';

export const getData = async (endPoint) => {
	const res = await fetch(`${baseURL}${endPoint}`, {
		headers: { Authorization: `Bearer ${token}` },
	});

	if (!res.ok) {
		console.log('Failed to fetch data');
	}

	return res.json();
};

export const postData = async (endPoint, data) => {
	const res = await fetch(`${baseURL}${endPoint}`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!res.ok) {
		console.log('Failed to posting data');
	}

	return res.json();
};
