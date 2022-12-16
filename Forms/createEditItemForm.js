import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const createEditItem = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="title">Item Name</label>
        <input type="text" class="form-control" id="item-name" aria-describedby="wordTitle" placeholder="Item Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Item Price</label>
        <textarea class="form-control" placeholder="Item Price" id="price" style="height: 100px">${obj.price || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary" id="submit-items-btn">Add/Edit Item
      </button>
    </form>`;

  renderToDOM('#create-item', domString);
  // createEditItem(`${obj.firebaseKey || ''}`);
};

export default createEditItem;
