import { io } from 'socket.io-client';
import { serverUrl } from './dinamcsRoutes';

const client = io(serverUrl);

export default client;
