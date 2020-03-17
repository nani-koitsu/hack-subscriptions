const GoogleStrategy = require("passport-google-oauth20");
const passport = require("passport");
require("dotenv").config();
const User = require("../../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      clientID: process.env.GOOGLE_CLIENT_ID,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);
      console.log("User", user);
      console.log("did it work?");
    }
  )
);
