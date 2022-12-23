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
          <p class="card-text">${obj.phone_number}</p>
          <p class="card-text">${obj.order_type}</p>
          <p class="card-text">${obj.email}</p>
        </div>
        <div class="card-body">
          <a href="#" id="order-details-btn--${obj.firebaseKey}" <button class="btn"><i class="fa fa-folder"></i></button></a>
          <a href="#" id="update-order-btn--${obj.firebaseKey}" <button class="btn"><i class="fa fa-bars"></i></button></a>
          <a href="#" id="delete-orders-btn--${obj.firebaseKey}" <button class="btn"><i class="fa fa-trash"></i></button></a>
          <a${obj.closed ? '<span class="badge bg-danger"><i class="fas fa-lock" aria-hidden="true"></i></span>' : ''}</a>
        </div>
       </div>`;
  });
  renderToDOM('#store', domString);
};

export { showOrders, emptyOrder };
