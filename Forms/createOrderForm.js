import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const typeArray = ['Walk-in', 'Phone'];

const createOrderForm = (obj = {}) => {
  clearDom();
  let domString = `

    <form id="${obj.firebaseKey ? `update-order-btn--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="title">Order Name</label>
        <input type="text" class="form-control" id="order-name" aria-describedby="cardTitle" placeholder="Enter Order Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Phone</label>
        <textarea class="form-control" placeholder="Phone Number" id="phone_number" style="height: 20px">${obj.phone_number || ''}</textarea>
      </div>

      <div class="form-group">
      <label for="price">Email</label>
      <input type="text" class="form-control" id="order-email" placeholder="Email" value="${obj.email || ''}" required>
    </div>
    
        <label for="type">Type</label> 
      <select id="order-type" class="form-select" aria-label="Default select example" required>
      </div>`;

  typeArray.forEach((type) => {
    domString += `
           <option 
             value="${type}" ${type === obj.order_type ? 'selected' : ''}>${type}</option>`;
  });

  domString += `</select><button type="submit" class="btn btn-primary" id="submit-order-btn">Submit Order
    </button></form>`;
  renderToDOM('#create-order-container', domString);
};

export default createOrderForm;
