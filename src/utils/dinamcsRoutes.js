const serverUrl = process.env.REACT_APP_NODE_ENV === 'production'
  ? process.env.REACT_APP_API
  : process.env.REACT_APP_LOCALHOST



export {
  serverUrl,
};
