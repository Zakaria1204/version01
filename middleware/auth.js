// module.exports = {
//   ensureAuth: function (req, res, next) {
//     // if (req.isAuthenticated()) {
//     //   return next()
//     // } else {
//     //   res.redirect('/')
//     // }
//     return next();
//   },
//   ensureGuest: function (req, res, next) {
//     // if (!req.isAuthenticated()) {
//     //   return next();
//     // } else {
//     //   res.redirect('/dashboard');
//     // }
//     return next();
//   },
// };

const jwt = require('jsonwebtoken');

module.exports = {
  ensureAuth: function (req, res, next) {
    jwt.verify(
      req.cookies.cookieToken,
      process.env.SECRET,
      function (err, decoded) {
        if (err) {
          res.redirect('auth/login');
        } else {
          next();
        }
      }
    );
  },
  ensureGuest: function (req, res, next) {
    jwt.verify(
      req.cookies.cookieToken,
      process.env.SECRET,
      function (err, decoded) {
        if (err) {
          next();
        } else {
          res.redirect('/dashboard');
        }
      }
    );
  },
};
