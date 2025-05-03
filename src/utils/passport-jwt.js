const passport = require('passport');

const Auth =(req,res,next)=>{
    passport.authenticate('jwt',(err,user,info)=>{
        if(err){
            return next(err);
        }

        if(!user){
            return res.status(401).json({
                message: 'Unauthorized user'
            });
        }

        req.user = user;
        next();
    })(req,res,next);
}

module.exports = Auth;