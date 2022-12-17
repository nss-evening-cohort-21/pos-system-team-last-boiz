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

  let domString = '';
  obj.itemsArray.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h4 class="card-title">${item.name}</h4>
            <h6 class="card-title">${item.price}</h6>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-items-btn--${item.firebaseKey}"></i>
            <i id="edit-items-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-items-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export default viewItems;
