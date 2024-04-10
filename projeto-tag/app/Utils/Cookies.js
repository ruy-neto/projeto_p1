const Cookies = require('js-cookie');

// Define um cookie
exports.setCookie = (key, value, options = {}) => {
  Cookies.set(key, value, options);
};

// Obtém um cookie
exports.getCookie = (key) => {
  return Cookies.get(key);
};

// Remove um cookie
exports.removeCookie = (key) => {
  Cookies.remove(key);
};

