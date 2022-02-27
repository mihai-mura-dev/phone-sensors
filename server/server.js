import { Server } from 'socket.io';

const io = new Server(5000, {
	cors: {
		origin: '*',
	},
});

io.on('connection', (socket) => {
	console.log('connected');
	socket.on('type', (type) => {
		if (type === 'mobile') {
			socket.join('mobile');
			io.emit('phoneConnected', true);
		}
	});

	socket.on('position', (position) => {
		io.emit('position', position);
	});

	socket.on('disconnect', () => {
		console.log('client disconnected');
		io.emit('phoneConnected', false);
	});
});
