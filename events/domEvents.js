const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        // const [, firebaseKey] = (e.target.id.split('--'));
      }
    }
    if (e.target.id.includes('view-orders')) {
      console.warn('View List');
    }

    // TODO: CLICK EVENT EDITING/UPDATING an order
    if (e.target.id.includes('edit-order')) {
      // const [, firebaseKey] = e.target.id.split('--');
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
