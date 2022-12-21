import { deleteSingleItem } from './itemData';
import { getOrderItems, getSingleOrder, deleteOrder } from './orderData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObject) => {
    getOrderItems(firebaseKey)
      .then((itemsArray) => resolve({ ...orderObject, itemsArray }));
  }).catch(reject);
});

const deleteOrderItemsRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(firebaseKey).then((ordersObject) => {
    const deleteOrderPromises = ordersObject.itemsArray.map((order) => deleteSingleItem(order.firebaseKey));
    Promise.all(deleteOrderPromises).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  })
    .catch(reject);
});
export { deleteOrderItemsRelationship, getOrderDetails };
