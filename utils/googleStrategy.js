const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User=require('../models/users')


passport.use(new GoogleStrategy({
    clientID: "148826912747-fsrkhm9o9sof7evsi01h01u67a35scne.apps.googleusercontent.com",
      clientSecret:"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",
      callbackURL: "https://missingtest.herokuapp.com/Users/auth/google/callback",
    },
    async (request, accessToken, refreshToken, profile, done) => {
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
    method: 'google',
    name: profile.displayName,
    email: profile.emails[0].value,
    photo:profile.picture,
    role:'google'
    
    
    });
    await newUser.save({ validateBeforeSave: false });
    return done(null, newUser);
    } catch (error) {
    return done(error, false)
    }
    }
    ));
  