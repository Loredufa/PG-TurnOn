const passport = require("passport")
const passportJwt = require("passport-jwt")
const ExtractJwt = passportJwt.ExtractJwt
const StrategyJwt = passportJwt.Strategy
const User = require("../../models/User")

passport.use(
    new StrategyJwt({ 
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
        secretOrKey: "secreto#$%123"
    }, (jwtPayload, done) => {
        return User.findOne({ where: { id: jwtPayload.id }})
            .then(user => done(null, user))
            .catch(err => done(err))
    })
)