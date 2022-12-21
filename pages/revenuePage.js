// import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const revenuePage = (obj = {}) => {
  clearDom();
  console.warn(obj);
  const domString = ` 
  <h1>Here's our revenue</h1> <i class="fa-solid fa-wave-pulse"></i>
  <div id="revenue">
  <h1>Total Revenue: $${obj}</h1>
  </div>
  `;
  renderToDOM('#revenue', domString);
};

export default revenuePage;
