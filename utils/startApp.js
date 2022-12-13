import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import showHomePage from '../pages/homePage';
import navBar from '../components/shared/navBar';
// import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';
// import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  showHomePage();
  // domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
};

export default startApp;
