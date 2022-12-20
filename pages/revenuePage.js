import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const revenuePage = (obj = {}) => {
  clearDom();

  const domString = ` 
  <h1>Here's our revenue</h1> <i class="fa-solid fa-wave-pulse"></i>
  <div id="revenue">
  <h1>Total Revenue</h1>
    <h3>Total Tips ${obj.tip}</h3>
    <h3>Total Call-in orders ${obj.order_type}</h3>
    <h3>Total walk-in orders ${obj.order_type}</h3>
    
  <div id ="payment types">
    <h1>Payment types</h1>
    <h3>Cash ${obj.paymentType}</h3>
    <h3>Credit ${obj.paymentType}</h3>
    <h3>Mobile ${obj.paymentType}</h3>
  </div>
    <p class="revenueTotal"><i class="fas fa-dollar-sign"></i></p>
    <h3><div id=""></div></h3>
  </div>
  `;
  renderToDOM('#revenue', domString);
};

export default revenuePage;
