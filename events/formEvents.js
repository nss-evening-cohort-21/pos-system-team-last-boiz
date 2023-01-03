import { createItems, updateItems } from '../api/itemData';
import { getOrderDetails } from '../api/mergedData';
import {
  createOrder, updateOrder, getOrders, getOrderItems
} from '../api/orderData';
import { getRevenue, updateRevenue, createRevenue } from '../api/revenueData';
// import showHomePage from '../pages/homePage';
import viewItems from '../pages/OrderDetails';
import revenuePage from '../pages/revenuePage';
import { showOrders } from '../pages/orders';
// import revenuePage from '../pages/revenuePage';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING ORDER
    if (e.target.id.includes('submit-order')) {
      console.warn('CLICKED SUBMIT ORDER', e.target.id);
      const payload = {
        name: document.querySelector('#order-name').value,
        phone_number: document.querySelector('#phone_number').value,
        email: document.querySelector('#order-email').value,
        order_type: document.querySelector('#order-type').value,
        order_status: 'open',
        uid: user.uid,
      };
      createOrder(payload).then(({ name }) => {
        console.warn(name);
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders(user.uid).then(showOrders);
        });
      });
    }
    // CLICK EVENT FOR UPDATING ORDER
    if (e.target.id.includes('update-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#order-name').value,
        phone_number: document.querySelector('#phone_number').value,
        email: document.querySelector('#order-email').value,
        order_type: document.querySelector('#order-type').value,
        order_status: 'open',
        firebaseKey,
        uid: user.uid,
      };
      updateOrder(payload).then(() => getOrders(user.uid).then(showOrders));
    }

    if (e.target.id.includes('submit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#item-name').value,
        price: document.querySelector('#price').value,
        orderId: document.querySelector('#order-id').value,
        firebaseKey,
        uid: user.uid,
      };
      console.warn(payload);
      createItems(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateItems(patchPayload).then(() => {
          getOrderDetails(payload.orderId).then(viewItems);
        });
      });
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#item-name').value,
        price: document.querySelector('#price').value,
        orderId: document.querySelector('#order-id').value,
        firebaseKey
      };
      console.warn(payload);
      updateItems(payload).then(() => {
        getOrderDetails(payload.orderId).then(viewItems);
      });
    }

    if (e.target.id.includes('close-order')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderItems(firebaseKey).then((itemsArray) => {
        const itemTotal = itemsArray.map((item) => Number(item.price)).reduce((a, b) => a + b, 0);
        const tips = Number(document.querySelector('#order-tip').value);
        console.warn(itemTotal);
        const revenuePayload = {
          paymentType: document.querySelector('#payment-type').value,
          tip: tips,
          total: itemTotal + tips,
          // date: currentDate,
          orderId: firebaseKey,
          uid: user.uid
        };
        createRevenue(revenuePayload).then(({ name }) => {
          const patchPayload = { firebaseKey: name };
          updateRevenue(patchPayload).then(() => {
            getRevenue(user.uid).then(revenuePage);
          });
        });
      });

      const orderPayload = {
        order_status: 'Closed',
        firebaseKey,
      };

      // get single order (firebase key)
      updateOrder(orderPayload).then(() => {
        getOrders(user.uid).then(showOrders);
      });
    }
  });
};

export default formEvents;
