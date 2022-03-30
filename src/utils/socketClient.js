import { io } from 'socket.io-client';

const client = io('https://in-tregasbackend.herokuapp.com');

export default client;
