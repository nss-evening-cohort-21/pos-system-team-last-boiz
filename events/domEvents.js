import { deleteOrderItemsRelationship, getOrderDetails } from '../api/mergedData';
import {
  getOrders, getSingleOrder
} from '../api/orderData';
import { showOrders } from '../pages/orders';
import createOrderForm from '../Forms/createOrderForm';
import closeOrderForm from '../Forms/closeOrderForm';
import viewItems from '../pages/OrderDetails';
import createEditItem from '../Forms/createEditItemForm';
// import showRevenue from '../pages/revenue';
import { deleteSingleItem, getSingleItem } from '../api/itemData';
import revenuePage from '../pages/revenuePage';
import { getRevenue } from '../api/revenueData';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // DELETE ORDER
    if (e.target.id.includes('delete-orders-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED ORDER', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));
        deleteOrderItemsRelationship(firebaseKey).then(() => {
          getOrders(user.uid).then(showOrders);
        });
      }
    }
    if (e.target.id.includes('view-order-btn')) {
      console.warn('View Order');
      getOrders(user.uid).then(showOrders);
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
      getOrderDetails(firebaseKey).then(viewItems);
    }
    // CLICK EVENT FOR CLOSING ORDER
    if (e.target.id.includes('payment-btn')) {
      const [, firebaseKey] = (e.target.id.split('--'));
      getSingleOrder(firebaseKey).then((obj) => closeOrderForm(obj));
    }

    // CLICK EVENT FOR SHOWING REVENUE PAGE
    if (e.target.id.includes('view-revenue-btn')) {
      console.warn('revenue');
      getRevenue(user.uid).then(revenuePage);
    }

    // TODO: CLICK EVENT FOR ADDING AN ITEM
    if (e.target.id.includes('add-items-btn')) {
      console.warn('create');
      const [, orderId] = e.target.id.split('--');
      createEditItem({ orderId });
    }
    // CLICK EVENT FOR UPDATING AN ITEM
    if (e.target.id.includes('update-item')) {
      console.warn('EDIT ITEM');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((obj) => createEditItem(obj));
    }

    // TODO: CLICK EVENT FOR DELETING An Item
    if (e.target.id.includes('delete-items-btn')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const btn = document.querySelector('[id*="add-items-btn"]').id;
        const [, itemFirebaseKey] = e.target.id.split('--');
        const [, orderFirebaseKey] = btn.split('--');
        deleteSingleItem(itemFirebaseKey).then(() => {
          getOrderDetails(orderFirebaseKey).then(viewItems);
        });
      }
    }

    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('DELETE Order', e.target.id);
        // console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.split('--');
        deleteOrderItemsRelationship(firebaseKey).then(() => {
          getOrders(user.uid).then(showOrders);
        });
      }
    }
  });
};
export default domEvents;
