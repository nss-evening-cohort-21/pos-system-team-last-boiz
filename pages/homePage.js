import renderToDOM from '../utils/renderToDom';

const showHomePage = () => {
  console.warn('homepage');
  const domString = `<button class="btn btn-success" type="button">View Orders</button>
  <button class="btn btn-info" type="button">Create Orders</button>
  <button class="btn btn-warning" type="button">View Revenue</button>`;
  // document.querySelector('#home-page').innerHTML = domString;
  renderToDOM('#home-page', domString);
  console.warn('home');
};

export default showHomePage;
