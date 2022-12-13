import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="login-page"></div>
    <div id="home-page"></div>
    <div id="view-orders"></div>
    <div id="order-details"></div>
    <div id="create-order"></div>
    <div id="create-item"></div>
    <div id="close-order"></div>
    <div id="revenue"></div>
  </div>`;

  renderToDOM('#app', domString);
  console.warn('dom');
};

export default domBuilder;
