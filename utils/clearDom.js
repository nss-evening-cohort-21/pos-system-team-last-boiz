const clearDom = () => {
  document.querySelector('#home-page').innerHTML = ' ';
  document.querySelector('#store').innerHTML = ' ';
  document.querySelector('#order-details').innerHTML = ' ';
  document.querySelector('#create-order-container').innerHTML = ' ';
  document.querySelector('#create-item').innerHTML = ' ';
  document.querySelector('#close-order').innerHTML = ' ';
  document.querySelector('#revenue').innerHTML = ' ';
};

export default clearDom;
