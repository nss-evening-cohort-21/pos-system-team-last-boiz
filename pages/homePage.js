import renderToDOM from '../utils/renderToDom';

const showHomePage = (user) => {
  const domString = `
  <h1>Welcome, ${user.displayName}</h1>
  <div class="btn">
    <button class="dom-btn" type="button" id="view-order-btn">View Orders</button>
    <button class="dom-btn" type="button" id="create-order-btn">Create Orders</button>
    <button class="dom-btn" type="button" id="view-revenue-btn">View Revenue</button>
  </div>`;
  renderToDOM('#home-page', domString);
};

export default showHomePage;
