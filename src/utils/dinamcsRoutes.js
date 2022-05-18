const serverUrl = process.env.REACT_APP_NODE_ENV === 'production'
  ? process.env.REACT_APP_API
  : process.env.REACT_APP_LOCALHOST


const serverUrlFront = process.env.REACT_APP_NODE_ENV === 'production'
  ? 'https://in-tregasdelivery.herokuapp.com/login'
  : 'http://localhost:3000/login'

export {
  serverUrl,
  serverUrlFront
};
