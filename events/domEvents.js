import {
  getOrders, getSingleOrder, deleteOrder, getOrderItems
} from '../api/orderData';
import { showOrders } from '../pages/viewOrder';
import createOrderForm from '../Forms/createOrderForm';
import closeOrderForm from '../Forms/closeOrderForm';
import viewItems from '../pages/items';
import createEditItem from '../Forms/createEditItemForm';
import { getSingleItem } from '../api/itemData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-orders-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED ORDER', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));
        deleteOrder(firebaseKey).then(() => {
          getOrders().then(showOrders);
        });
      }
    }
    if (e.target.id.includes('view-order-btn')) {
      console.warn('View Order');
      getOrders().then(showOrders);
    }

    // Create an Order
    if (e.target.id.includes('create-order-btn')) {
      console.warn('ADD ORDER');
      createOrderForm();
    }
    // TODO: CLICK EVENT EDITING/UPDATING an order
    if (e.target.id.includes('update-order-btn')) {
      console.warn('Edit btn push');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(createOrderForm);
    }

    // TODO: CLICK EVENT FOR VIEW Order DETAILS
    if (e.target.id.includes('order-details')) {
      const [, firebaseKey] = (e.target.id.split('--'));
      getOrderItems(firebaseKey).then(viewItems);
    }
    // CLICK EVENT FOR CLOSING ORDER
    if (e.target.id.includes('payment-btn')) {
      // const [, firebaseKey] = (e.target.id.split('--'));
      closeOrderForm();
    }

    // CLICK EVENT FOR CLOSED ORDERS
    if (e.target.id.includes('closed-order-btn')) {
      // const [, firebaseKey] = (e.target.id.split('--'));
      // closedOrders().then(showOrders);
    }

    // TODO: CLICK EVENT FOR ADDING AN ITEM
    if (e.target.id.includes('add-items-btn')) {
      console.warn('create');
      const [, orderId] = e.target.id.split('--');
      createEditItem({ orderId });
    }

    if (e.target.id.includes('update-item')) {
      console.warn('EDIT ITEM');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((obj) => createEditItem(obj));
    }

    // CLICK EVENT FOR DELETING AN ITEM
    if (e.target.id.includes('delete-items')) {
      console.warn('DELETE ITEM');
    }
  });
};
export default domEvents;
