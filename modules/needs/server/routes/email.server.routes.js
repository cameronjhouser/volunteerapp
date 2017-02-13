'use strict';

module.exports = function(app) {
 
 var email = require('../controllers/email.server.controller');

 app.route('/email').post(email.create);
};
