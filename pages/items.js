import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

// const emptyWords = () => {
//   const domString = '<h1>No Words</h1>';
//   renderToDOM('#store', domString);
// };

const viewItems = (obj) => {
  console.warn(obj);
  clearDom();

  const btnString = `<button class="btn btn-success btn-lg mb-4" id="add-items-btn--${obj.firebaseKey}">Add An Item</button><button class="btn btn-primary btn-lg mb-4" id="payment-btn--${obj.firebaseKey}">Go To Payment</button>`;
  renderToDOM('#order-details', btnString);

  let domString = `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${obj.name}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${obj.phone_number}</li>
        <li class="list-group-item">${obj.email}</li>
      </ul>
    </div>`;

  obj.itemsArray.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h4 class="card-title">${item.name}</h4>
            <h6 class="card-title">${item.price}</h6>
            <hr>
            <i id="update-item-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-items-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export default viewItems;
