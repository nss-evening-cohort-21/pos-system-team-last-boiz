import { createItems, updateItems } from '../api/itemData';
import { getOrderDetails } from '../api/mergedData';
import {
  createOrder, updateOrder, getOrders, getOrderItems
} from '../api/orderData';
import { getRevenue, updateRevenue, createRevenue } from '../api/revenueData';
import showHomePage from '../pages/homePage';
import viewItems from '../pages/items';
// import revenuePage from '../pages/revenuePage';
import { showOrders } from '../pages/viewOrder';
// import revenuePage from '../pages/revenuePage';

const formEvents = () => {
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
      };
      createOrder(payload).then(({ name }) => {
        console.warn(name);
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders().then(showOrders);
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
        closed: document.querySelector('#closed').checked,
        firebaseKey
      };
      updateOrder(payload).then(() => getOrders().then(showOrders));
    }

    if (e.target.id.includes('submit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#item-name').value,
        price: document.querySelector('#price').value,
        orderId: document.querySelector('#order-id').value,
        firebaseKey
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
        const itemTotal = itemsArray.map((item) => Number(item.itemPrice)).reduce((a, b) => a + b, 0);
        const tips = Number(document.querySelector('#order-tip').value);
        console.warn(itemTotal);
        const revenuePayload = {
          paymentType: document.querySelector('#payment-type').value,
          tip: tips,
          total: itemTotal + tips,
          // date: currentDate,
          orderId: firebaseKey,
        };
        createRevenue(revenuePayload).then(({ name }) => {
          const patchPayload = { firebaseKey: name };
          updateRevenue(patchPayload).then(() => {
            getRevenue().then(showHomePage);
          });
        });
      });

      const orderPayload = {
        order_status: false,
        firebaseKey,
      };

      // get single order (firebase key)
      updateOrder(orderPayload).then(() => {
        getOrders().then(showOrders);
      });
    }
  });
};

export default formEvents;
