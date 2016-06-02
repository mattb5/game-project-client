'use strict';

const app = require('../app.js');
//the data below is the password
const success = (data) => {
if(data)
 {
  console.log(data);
 }
 else
 {
  console.log("Changed password successfully");
 }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = function (data){
app.user = data.user;
console.log(data);
};

const signOutSuccess = function (){
  app.user = null;
  console.log(app);
};

// const onNewGameSuccess = function (){
//   console.log(app.user.email, app.user.token);
// };




module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  // onNewGameSuccess,
};
