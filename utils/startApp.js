import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import showHomePage from '../pages/homePage';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { getOrders } from '../api/orderData';
import { showOrders } from '../pages/orders';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  showHomePage(user);
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
};
getOrders().then((order) => showOrders(order));

export default startApp;
