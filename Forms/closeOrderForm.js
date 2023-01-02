import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const paymentArray = ['Mobile', 'Cash', 'Card'];

const closeOrderForm = (obj = {}) => {
  clearDom();
  console.warn('obj');
  let domString = `
<form id="close-order--${obj.firebaseKey}" class="mb-4">
  <label>You Can Close Your Order Here</label>
      <select class="form-select" id="payment-type" aria-label="Default select" required>
      <option>Select Your Payment Method Below</option>
    `;
  paymentArray.forEach((payment) => {
    domString += `
       <option 
         value="${payment}" ${payment === obj.paymentType ? 'selected' : ''}>${payment}</option>`;
  });

  domString += `
    <div class ="mb-3 row">
        <label for="just-the-tip" class="form-label">Tip</label>
    </div>
    <div class="col-sm-10">
    <input type="number" class="form-control" id="order-tip" placeholder="Don't Be Cheap, Give Us a Tip!" value="${obj.tip || ''}" required>
    <input value="${obj.firebaseKey}" type="hidden" id="hidden-value"/>
    </div>
  `;

  domString += `</select><button id="close-payment--view-revenue-btn" type="submit" class="btn btn-danger">Close Order
    </button></form>`;

  renderToDOM('#order-container', domString);
};

export default closeOrderForm;
