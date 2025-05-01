const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({

    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        max : [15,"Password must Be 15 Char"],
        required : true
    },
    bio : {
        type : String
    }

});


userSchema.pre('save',async(next)=>{
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hash = await bcrypt.hashSync(this.password, salt);
    this.password = hash;
});

userSchema.methods.compare = function(password){
    return bcrypt.compareSync(password,this.password);
}



const User = mongoose.model('User',userSchema);
module.exports = User;