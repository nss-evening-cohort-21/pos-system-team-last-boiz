// import client from '../utils/client';

// const endpoint = client.databaseURL;

// // GET ITEMS
// const getItems = () => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/item.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// // CREATE ITEMS
// const createItems = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/item.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// const deleteItems = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/item/${firebaseKey}.json`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve((data)))
//     .catch(reject);
// });
