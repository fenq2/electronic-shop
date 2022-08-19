import express from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
export const authRouter = express.Router();
import { User } from "../models/user.js";
import session from "express-session";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.cookieParser());
// app.use(express.bodyParser());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "bla bla bla",
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    function (req, username, password, done) {
      // проверка в mongo, существует ли пользователь с таким логином
      User.findOne({ username: username }, function (err, user) {
        // В случае возникновения любой ошибки, возврат с помощью метода done
        if (err) return done(err);
        // Пользователь не существует, ошибка входа и перенаправление обратно
        if (!user) {
          console.log("User Not Found with username " + username);
          return done(null, false);
        }
        // Пользователь существует, но пароль введен неверно, ошибка входа
        // if (!user.verifyPassword(password)) {
        //   console.log("Invalid Password");
        //   return done(null, false, req.flash("message", "Invalid Password"));
        // }
        // Пользователь существует и пароль верен, возврат пользователя из
        // метода done, что будет означать успешную аутентификацию
        return done(null, true);
      });
    }
  )
);

// passport.use(
//   new LocalStrategy((username, password, done) => {
//     User.findOne({ username }, (err, user) => {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false);
//       }
//       // if (!user.verifyPassword(password)) {
//       //   return done(null, false);
//       // }
//       return done(null, user);
//     });
//   })
// );

authRouter.post(
  "/login",
  app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: "bla bla bla",
    })
  ),
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: false,
  })
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
