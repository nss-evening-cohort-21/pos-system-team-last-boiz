import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="login-page"></div>
    <div id="home-page"></div>
    <div id="store"></div>
    <div id="order-details"></div>
    <div id="create-order-container"></div>
    <div id="create-item"></div>
    <div id="order-container"></div>
    <div id="revenue"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
