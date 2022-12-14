import renderToDOM from '../utils/renderToDom';

const showHomePage = () => {
  const domString = `
  <div class="d-grid gap-2">
    <button id="view-orders" class="btn btn-success" type="button">View Orders</button>
    <button id="create-order" class="btn btn-info" type="button">Create Orders</button>
    <button id="revenue" class="btn btn-warning" type="button">View Revenue</button>
  </div>`;
  renderToDOM('#home-page', domString);
};

export default showHomePage;
