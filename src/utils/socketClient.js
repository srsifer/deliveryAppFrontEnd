import { io } from 'socket.io-client';

const client = io('https://localdost:54860/');

export default client;
