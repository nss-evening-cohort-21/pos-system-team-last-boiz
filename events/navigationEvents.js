import { getOrders, closedOrders } from '../api/orderData';
import { showOrders } from '../pages/orders';
import createOrderForm from '../Forms/createOrderForm';
import revenuePage from '../pages/revenuePage';
import { getRevenue } from '../api/revenueData';

const navigationEvents = (user) => {
  document.querySelector('#view-order-btn').addEventListener('click', () => {
    getOrders(user.uid).then(showOrders);
  });

  document.querySelector('#create-order-btn').addEventListener('click', () => {
    createOrderForm(user.uid);
  });

  document.querySelector('#closed-order-btn').addEventListener('click', () => {
    closedOrders(user.uid).then(showOrders);
  });

  document.querySelector('#view-revenue-btn').addEventListener('click', () => {
    getRevenue(user.uid).then(revenuePage);
  });
};

export default navigationEvents;
