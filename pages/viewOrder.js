import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrder = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDOM('#store', domString);
};

const showOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((obj) => {
    domString += `
    <div id="view" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-text">${obj.name}</h5><hr><br>
          <h5 class"card-text">${obj.order_status}</h5>
          <p class="card-text">${obj.phone_number}</p>
          <p class="card-text">${obj.order_type}</p>
          <p class="card-text">${obj.email}</p>
          <p${obj.closed ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</p>
        </div>
        <div class="card-body">

          <a href="#" id="order-details-btn--${obj.firebaseKey}" class="card-link">Order Details</a>
          <a href="#" id="update-order-btn--${obj.firebaseKey}" class="card-link">Edit</a>
          <a href="#" id="delete-orders-btn--${obj.firebaseKey}" class="card-link">Delete</a>
        </div>
       </div>`;
  });
  renderToDOM('#store', domString);
};

export { showOrders, emptyOrder };
