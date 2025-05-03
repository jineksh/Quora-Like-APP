const { mongo } = require('mongoose');
const User = require('../model/User');
const CrudRepo = require('./Crud-Repo');

class UserRepo extends CrudRepo{


    constructor(){
        super(User);
    }


    async getWithEmail(email){
        try {
            const user = await User.findOne({email : email});
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    
};


module.exports = UserRepo;