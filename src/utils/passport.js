var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('../model/User');
const { Strategy } = require('passport-jwt');
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'AUTH';

const passportAuth = (passport) => {
    passport.use(
        new JwtStrategy(opts, async (jwt_payload, done, err) => {
            try {
                const user = await User.findById(jwt_payload.id);

                if (err) {
                    done(err, false);
                }

                if (user) {
                    done(user, true);
                }
                else done(null, false);
            } catch (error) {
                console.log(error);
                throw error;
            }
        }

        )
    )
}

module.exports = passportAuth;