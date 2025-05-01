const User = require('../model/User');
const CrudRepo = require('./Crud-Repo');

class UserRepo extends CrudRepo{


    constructor(){
        super(User);
    }

};


module.exports = UserRepo;