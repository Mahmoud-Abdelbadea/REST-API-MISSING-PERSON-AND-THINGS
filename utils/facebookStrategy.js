const passport = require("passport");
const FacebookStrategy = require('passport-facebook').Strategy;
const User=require('../models/users')


passport.use(new FacebookStrategy({
    clientID: '3199736996958975',
    clientSecret: '07de0f0007555b0361f01d6d98d78123',
    callbackURL: 'https://missingtest.herokuapp.com/Users/auth/facebook/callback',
    profileFields: ['displayName', 'photos', 'email']
  }, async function (accessToken, refreshToken, profile, done) {

  try {
    existingUser = await User.findOne({ email: profile.emails[0].value });
   // if user exists return the user 

   if (existingUser) {
     existingUser.login=true
     await existingUser.save({ validateBeforeSave: false })
   return done(null, existingUser);
   }
   // if user does not exist create a new user 
   console.log('Creating new user...');
   const newUser = new User({
   method: 'facebook',
   name: profile.displayName,
   email: profile.emails[0].value,
   photo:profile.photos[0].value,
   role:'facebook'
   
   
   });
   await newUser.save({ validateBeforeSave: false });
   return done(null, newUser);
   } catch (error) {
   return done(error, false)
   }
   }
));