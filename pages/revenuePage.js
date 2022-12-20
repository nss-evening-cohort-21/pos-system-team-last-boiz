import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const revenuePage = () => {
  clearDom();
  const domString = `
  <h1>Here's our revenue</h1> <i class="fa-solid fa-wave-pulse"></i>
  <div id="revenue">
    <h3>Total Revenue</h3>
    <p class="revenueTotal"><i class="fas fa-dollar-sign"></i></p>
    <h3><div id=""></div></h3>
  </div>
  `;
  renderToDOM('#revenue', domString);
};

export default revenuePage;
