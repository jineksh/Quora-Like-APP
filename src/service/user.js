const {UserRepo} = require('../repository/index');
const CrudService = require('./Crud-service');

class UserService extends CrudService{

    constructor(){
        super(UserRepo);
    }
}

module.exports = UserService;