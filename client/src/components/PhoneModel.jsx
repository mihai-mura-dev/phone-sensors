import { useState } from 'react';
import { useEffect } from 'react';
import socket from '../socket.io';

function PhoneModel() {
	const [positionState, setPositionState] = useState();

	useEffect(() => {
		socket.on('position', (position) => {
			setPositionState(position);
		});

		return () => {
			socket.off('position');
		};
	}, []);

	return <div>{JSON.stringify(positionState)}</div>;
}
export default PhoneModel;
