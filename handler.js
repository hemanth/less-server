'use strict';
const xkcd = require('xkcd-imgs');

module.exports.xkcd = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: {
      img: {},
      input: event,
    }
  };

  xkcd.img(function(err, result){
    response.body.img = result;
    response = JSON.stringify(response);
    callback(null, response);
  });
};
