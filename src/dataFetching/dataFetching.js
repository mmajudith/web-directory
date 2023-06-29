const baseURL = 'https://api.dutiful.ng/v2/';
const token = 'apiAuth';

//Fetch data function
export const getData = async (endPoint) => {
	const res = await fetch(`${baseURL}${endPoint}`, {
		headers: { Authorization: `Bearer ${token}` },
	});

	if (!res.ok) {
		console.log('Failed to fetch data');
	}

	return res.json();
};

//Post data function 
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
		return 'Failed to post data';
	}

	return res.json();
};

//Reusable post submit function handler
export const handlePostSubmit = async ( 
	endPoint, 
	details, 
	errMessage, 
	successMessage, 
	setDisable,
	route, 
	router, 
	) => {

	try {
		const data = await postData(endPoint,  { ...details });

		if(data !== 'Failed to post data'){
			console.log(data);
			alert(successMessage);

			route && router.push(route);

		}else{
			alert(errMessage);
			setDisable(false);
		}
		
	} catch (error) {
		console.log(error, 'err posting data');
		alert(errMessage);
		setDisable(false);
	}
	
}
