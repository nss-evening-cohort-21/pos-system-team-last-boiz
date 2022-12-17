import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

// const emptyWords = () => {
//   const domString = '<h1>No Words</h1>';
//   renderToDOM('#store', domString);
// };

const showRevenue = (obj = {}) => {
  clearDom();

  // const btnString = `<button class="btn btn-success btn-lg mb-4" id="add-items-btn--${obj.orderId}">Add An Item</button><button class="btn btn-primary btn-lg mb-4" id="payment-btn">Go To Payment</button>`;
  // renderToDOM('#revenue', btnString);

  let domString = '';
  obj.items.forEach((item) => {
    domString += `
    <div id="revenue">
      <h1>REVENUE</h1>
    </div>
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
  renderToDOM('#revenue', domString);
};

export default showRevenue;
