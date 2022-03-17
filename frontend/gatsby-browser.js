require("./src/styles/tailwind.css");

exports.onRouteUpdate = () => {
  window.locations = window.locations || [document.referrer];
  window.locations.push(window.location.pathname);
  window.previousPath = window.locations[window.locations.length - 2];
};
