import { createItems, updateItems } from '../api/itemData';
import getOrderDetails from '../api/mergedData';
import {
  createOrder, updateOrder, getOrders
} from '../api/orderData';
import viewItems from '../pages/items';
import { showOrders } from '../pages/viewOrder';
import getOrderDetails from '../api/mergedData';

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
      const payload = {
        closed: true,
        firebaseKey
      };
      updateOrder(payload).then(() => {
        if (payload.closed === true) {
          // showRevenue(firebaseKey);
        }
        console.warn('revenue');
        // Create Reveune API
        // grab all the items and add them to revenue
        // const revenuePayload = {
        // tip: document.querySelector('#order-tip').value,
        // orderId: document.querySelector('#hidden-value').value,
        // }
      });
    }
  });
};

export default formEvents;
