// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
(function () {
  'use strict';


var sendgrid = require('sendgrid')('meanjs_demo', '9lorbUKGQiCWsG5HmkfXqA');
// .mail

exports.create = function(req, res){
	console.log(req.body);
	var email = new sendgrid.Email({
		to: 'cameronjhouser@gmail.com',
		from: req.body.email,
		subject: 'Volunteer Sign-up',
		text: req.body.message
	});

	sendgrid.send(email, function (err, json){
		if (err) {
			return res.status(400).send('Error');
		}
		return res.status(200).send('Success');
	});
};
  

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

// var helper = require('sendgrid').mail;
  
// from_email = new helper.Email("test@example.com");
// to_email = new helper.Email("test@example.com");
// subject = "Sending with SendGrid is Fun";
// content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js");
// mail = new helper.Mail(from_email, subject, to_email, content);

// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: mail.toJSON()
// });

// sg.API(request, function(error, response) {
//   console.log(response.statusCode);
//   console.log(response.body);
//   console.log(response.headers);
// })
 
// to_email = new helper.Email("cameronjhouser@gmail.com");
// from_email = new helper.Email("test@example.com");
// subject = "Sending with SendGrid is Fun";
// content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js");
// mail = new helper.Mail(from_email, subject, to_email, content);

// var sg = require('sendgrid')('meanjs_demo', '9lorbUKGQiCWsG5HmkfXqA');
// var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: mail.toJSON()
// });

// sg.API(request, function(error, response) {
//   console.log(response.statusCode);
//   console.log(response.body);
//   console.log(response.headers);
// });
}());


