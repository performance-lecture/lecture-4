import React, { useEffect } from 'react';
import { fetchPhotos } from './redux/photos';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
	const dispatch = useDispatch();
	const { photos } = useSelector((state) => state);

	useEffect(
		() => {
			dispatch(fetchPhotos());
		},
		[ dispatch ]
	);

	console.log('photos', photos);

	return (
		<div className="App">
			<div />
		</div>
	);
}

export default App;
