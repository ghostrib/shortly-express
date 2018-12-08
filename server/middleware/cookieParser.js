const parseCookies = (req, res, next) => {
  let cookies = {};

  if (req.headers.cookie) {
    let result = [];
    let key, value;
    let cookieArray = req.headers.cookie.split(';')
    for (let item of cookieArray) {
      result.push(item.trim().split('='));
    }

    result.forEach(elem => {
      key = elem[0];
      value = elem[1];
      cookies[key] = value;
    });
    req.cookies = cookies;
  }
  return next();
};

module.exports = parseCookies;
