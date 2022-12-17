import { getOrderItems, getSingleOrder } from './orderData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObject) => {
    getOrderItems(firebaseKey)
      .then((itemsArray) => resolve({ ...orderObject, itemsArray }));
  }).catch(reject);
});

export default getOrderDetails;
