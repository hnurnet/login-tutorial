const user = require('./models/user');

var passport = require('passport')
, localStrategy = require('passport-local').Strategy;
var User = require('./models/user');

passport.use('local',new localStrategy({
    usernameField:'email',
    passwordField:'password'
},
    function(username, password, done){
        user.findOne({ email: username}, function (err, user) {
            if(err){ return done(err);}
            if(!user){
                return done(null, false, {message: 'Incorrect username.'});
            }
            if(!user.isValid(password)){
                return done(null, false, {message: 'Incorrect password.'});
            }
            return done(null, user)
        });
    }
));
  
passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id,done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
  });