import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { useEffect } from 'react';
import socket from '../socket.io';
import Phone from './Phone';

function PhoneModel() {
	const [positionState, setPositionState] = useState([0, 0, 0]);

	useEffect(() => {
		socket.on('position', (position) => {
			setPositionState(convert(position.alpha, position.beta, position.gamma));
		});

		return () => {
			socket.off('position');
		};
	}, []);

	const convert = (alpha, beta, gamma) => {
		let x, y, z;

		console.log(alpha, beta, gamma);

		y = (Math.PI / 180) * alpha;

		x = (Math.PI / 180) * beta;

		z = (Math.PI / 180) * -gamma;

		return [x, y, z];
	};

	return (
		<Canvas className='canvas' colorManagement camera={{ position: [0, 20, 120], fov: 70 }}>
			<ambientLight intensity={0.3} />
			<directionalLight position={[10, 10, 5]} intensity={1} />
			<directionalLight position={[0, 10, 0]} intensity={1.5} />
			<Suspense fallback={null}>
				<Phone rotation={positionState} />
			</Suspense>
		</Canvas>
	);
}
export default PhoneModel;
