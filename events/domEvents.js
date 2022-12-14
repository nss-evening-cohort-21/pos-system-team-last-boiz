import createOrderForm from '../Forms/createOrderForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('create-order-btn')) {
      console.warn('CREATE ORDER');
      createOrderForm();
    }
  });
};

export default domEvents;
