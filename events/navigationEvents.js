import { getOrders, closedOrders } from '../api/orderData';
import { showOrders } from '../pages/viewOrder';
import createOrderForm from '../Forms/createOrderForm';

const navigationEvents = () => {
  document.querySelector('#view-order-btn').addEventListener('click', () => {
    getOrders().then(showOrders);
  });

  document.querySelector('#create-order-btn').addEventListener('click', () => {
    createOrderForm();
  });

  document.querySelector('#closed-order-btn').addEventListener('click', () => {
    closedOrders().then(showOrders);
  });
};

export default navigationEvents;
