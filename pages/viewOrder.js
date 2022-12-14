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
      <div id="view" class="card">
        <div class="card-body">
          <h5 class="card-text">${obj.name}</h5><hr><br>
          <h5 class"card-text">${obj.order_status}</h5>
          <p class="card-text">${obj.phone_number}</p>
          <p class="card-text">${obj.order_type}</p>
          <p class="card-text">${obj.email}</p>
        </div>
        <div class="card-body">
          <a href="#" id="edit-vocab-btn--${obj.firebaseKey}" class="card-link">Edit</a>
          <a href="#" id="delete-vocab-btn--${obj.firebaseKey}" class="card-link">Delete</a>
        </div>
       </div>`;
  });
  renderToDOM('#store', domString);
};

export { showOrders, emptyOrder };
