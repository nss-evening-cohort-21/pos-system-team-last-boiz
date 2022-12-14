import { deleteOrder, getOrders, getSingleOrder } from '../api/orderData';
import { showOrders } from '../pages/viewOrder';
import createOrderForm from '../Forms/createOrderForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-orders-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
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

    // TODO: CLICK EVENT EDITING/UPDATING an order
    if (e.target.id.includes('update-order')) {
      console.warn('edit');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(createOrderForm);
    }

    // CLICK EVENT FOR CREATING AN ORDER
    if (e.target.id.includes('create-order-btn')) {
      console.warn('ADD ORDER');
      createOrderForm();
    }

    // TODO: CLICK EVENT FOR VIEW Word DETAILS
    if (e.target.id.includes('order-details')) {
      // const [, firebaseKey] = (e.target.id.split('--'));
    }

    if (e.target.id.includes('close-order')) {
      // const [, firebaseKey] = (e.target.id.split('--'));
    }
  });
};
export default domEvents;
