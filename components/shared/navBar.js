import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-light mb-5">
  <div class="container-fluid">
      <img id="navBarLogo" src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" alt="Avatar">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#" id="view-order-btn">View Orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="create-order-btn">Create an Order</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="closed-order-btn">Closed Orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="view-revenue-btn">View Revenue</a>
          </li>
        </ul>
        <span class="navbar-text">
          <div id="logout-button"></div>
        </span>
      </div>
      </div>
    </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
