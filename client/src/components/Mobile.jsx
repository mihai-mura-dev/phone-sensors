import { useEffect } from 'react';
import socket from '../socket.io';

function Mobile() {
	useEffect(() => {
		socket.emit('type', 'mobile');

		const motionEvent = (event) => {
			socket.emit('position', {
				alpha: parseFloat(event.alpha).toFixed(1),
				beta: parseFloat(event.beta).toFixed(1),
				gamma: parseFloat(event.gamma).toFixed(1),
			});
		};

		window.addEventListener('deviceorientation', motionEvent);
		//! orientation lock not working
		// window.screen.orientation.lock('portrait');

		return () => {
			window.removeEventListener('deviceorientation', motionEvent);
		};
	}, []);

	return (
		<div className='mobile'>
			<h2>View device motion on desktop!</h2>
		</div>
	);
}
export default Mobile;
