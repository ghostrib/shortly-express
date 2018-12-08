const models = require("../models");
const Promise = require("bluebird");

module.exports.createSession = (req, res, next) => {
  //   console.log(models.Sessions.create());

  return models.Sessions.create().then(results => {
    models.Sessions.get({ id: results.insertId })
      .then(session => {
        // console.log(session);
        req.session = session;
        res.cookie("shortlyid", session.hash);
        console.log("IS THIS OUR COOKIE???", res.cookie);
        return next();
      })
      //   .then(session => {
      //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", session.hash);
      //     // res.cookies("shortlyid", session.hash);
      //     return next();
      //   })
      .catch(error => {
        //   console.log("Error creating our new session", err);
        throw error;
      });
  });

  //   return next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/
