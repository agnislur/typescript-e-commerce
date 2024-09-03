import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  withCredentials: true, // untuk mengirimkan cookies/sessions
});

export default instance;


// import axios from 'axios';

// const instance = axios.create({
//   // headers: {"Access-Control-Allow-Origin": "*"},
//   baseURL: 'https://fluent-donkey-vocal.ngrok-free.app/', // URL ngrok publik untuk back end
//   withCredentials: true,
// });


// export default instance;