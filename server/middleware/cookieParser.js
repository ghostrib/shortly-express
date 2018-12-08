const parseCookies = (req, res, next) => {
  /*
create a cookies object
testing express middleware 
line 376 serverspec.js

// cookies = {
//   shortlyid: "18ea4fb6ab3178092ce936c591ddbb90c99c9f66",
//   otherCookie: "2a990382005bcc8b968f2b18f8f7ea490e990e78",
//   anotherCookie: "8a864482005bcc8b968f2b18f8f7ea490e577b20"
// };

*/

  let arr = req.headers.cookie.split("=");
  let key = arr[0];
  let value = arr[1];
  //   let cookies = {};
  //   cookies.cookie = req.headers.cookie;
  //   console.log(cookies);
  //console.log(req.headers.cookie);
};

module.exports = parseCookies;
