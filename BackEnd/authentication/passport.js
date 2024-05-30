const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');
const buyer = require('../models/buyer');
// const farmer = require('../models/farmer');
passport.use(new LocalStrategy(
    async function (username, password, cb) {
        try {
            let user = await buyer.findOne({ username });
            if (!user) return cb(null, false);

            bcrypt.compare(password, user.password, function (err, result) {
                if (err) return cb(err);
                else if (result == false) return cb(null, false);
                cb(null, user);
            });

        } catch (err) {
            if (err) { return cb(err); }
        }

    }
))
// passport.use(new LocalStrategy(
//     async function (username, password, cb) {
//         try {
//             let user = await farmer.findOne({ username });
//             if (!user) return cb(null, false);

//             bcrypt.compare(password, user.password, function (err, result) {
//                 if (err) return cb(err);
//                 else if (result == false) return cb(null, false);
//                 cb(null, user);
//             });

//         } catch (err) {
//             if (err) { return cb(err); }
//         }

//     }
// ))
//https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
passport.serializeUser(function (user, done) {
    console.log("serialize",user._id);
    done(null, user._id);
});


passport.deserializeUser(async function (id, done) {
    console.log("Deserialize",id);
    try{
        console.log("Deserialize" ,id);
        let user = await buyer.findOne({_id: id});
        // console.log("Deserialize" ,user);
        if(!user) return done(null, false);
        done(null, user);
    }catch(err){
        done(err,false);
    }

});
// passport.deserializeUser(async function (id, done) {
//     console.log("Deserialize",id);
//     try{
//         console.log("Deserialize" ,id);
//         let user = await farmer.findOne({_id: id});
//         // console.log("Deserialize" ,user);
//         if(!user) return done(null, false);
//         done(null, user);
//     }catch(err){
//         done(err,false);
//     }

// });





module.exports = passport;