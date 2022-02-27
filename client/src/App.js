/* eslint-disable react-hooks/exhaustive-deps */
import { useOs } from '@mantine/hooks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';
import * as actions from './redux/actions';

function App() {
	const dispatch = useDispatch();
	const mobile = useSelector((store) => store.mobile);
	const os = useOs();

	useEffect(() => {
		//* set mobile or not
		switch (os) {
			case 'android':
				dispatch(actions.setMobile());
				break;
			case 'ios':
				dispatch(actions.setMobile());
				break;
			default:
				break;
		}
	}, []);

	return <div className='app'>{mobile ? <Mobile /> : <Desktop />}</div>;
}

export default App;
