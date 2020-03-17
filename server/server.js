const express = require("express");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

require("dotenv").config();
const googleAuth = require("./routes/config/google-config");
// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));
// app.use(passport.initialize());
app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:3000", credentials: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
