import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../socket.io';
import * as actions from '../redux/actions';
import { Loader } from '@mantine/core';
import PhoneModel from './PhoneModel';

function Desktop() {
	const dispatch = useDispatch();
	const phoneConnected = useSelector((store) => store.phoneConnected);

	useEffect(() => {
		socket.emit('type', 'desktop');

		socket.on('phoneConnected', (value) => {
			dispatch(actions.changePhoneConnected(value));
		});

		return () => {
			socket.off('phoneConnected');
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div className='desktop'>{phoneConnected ? <PhoneModel /> : <Loader size={'xl'} color='green' variant='bars' />}</div>;
}
export default Desktop;
