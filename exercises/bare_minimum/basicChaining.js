/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var request = require('request');
var promiseConstructors = require('./promiseConstructor.js');
var promisification = require('./promisification.js');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return promiseConstructors.pluckFirstLineFromFileAsync(readFilePath)
    .then((user) => promisification.getGitHubProfileAsync(user))
    .then((profile) => fs.writeFileSync(writeFilePath,JSON.stringify(profile)));
  // return new Promise ((resolve, request) => {
  //   fs.readFile(readFilePath, 'utf8', (err, content) => {
  //     if (err) {
  //       reject (err);
  //     } else {
  //       var arr = content.split('\n');
  //       resolve (arr[0]);
  //     }
  //   });
  // })
  //   .then( (user) => {
  //     return new Promise((resolve,reject) => {
  //       var options = {
  //         url: 'https://api.github.com/users/' + user,
  //         headers: { 'User-Agent': 'request' },
  //         json: true  // will JSON.parse(body) for us
  //       };
  //       request.get(options, function (err, res, body) {
  //         if (err) {
  //           reject(err)
  //         } else if (body.Message) {
  //           reject(new Error('Failed'))
  //         } else {
  //           resolve(body);
  //         }
  //       });
  //     });
  //   })
  //   .then((profile) => {
  //     return new Promise((resolve,reject) => {
  //       fs.writeFile(writeFilePath, JSON.stringify(profile), (err) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(profile);
  //         }
  //       });
  //     });
  //   });
};


// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
