const serverUrl = process.env.NODE_ENV === 'production'
  ? 'https://in-tregasbackend.herokuapp.com'
  : 'localhost:3001/'
// const serverUrl = 'https://in-tregasbackend.herokuapp.com';
const test = 'teste';

export {
  serverUrl,
  test,
};
