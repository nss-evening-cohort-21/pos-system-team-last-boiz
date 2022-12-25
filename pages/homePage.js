import renderToDOM from '../utils/renderToDom';

const showHomePage = () => {
  const domString = `
  <div class="d-grid gap-2">
    <button class="dom-btn" type="button" id="view-order-btn">View Orders</button>
    <button class="dom-btn" type="button" id="create-order-btn">Create Orders</button>
    <button class="dom-btn" type="button" id="view-revenue-btn">View Revenue</button>
  </div>`;
  renderToDOM('#home-page', domString);
};

export default showHomePage;
