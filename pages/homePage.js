import renderToDOM from '../utils/renderToDom';

const showHomePage = () => {
  console.warn('homepage');
  const domString = `
  <div class="d-grid gap-2">
    <button class="btn btn-success" type="button">View Orders</button>
    <button class="btn btn-info" type="button">Create Orders</button>
    <button class="btn btn-warning" type="button">View Revenue</button>
  </div>`;

  renderToDOM('#home-page', domString);
  console.warn('home');
};

export default showHomePage;
