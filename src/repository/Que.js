const Questions = require('../model/Quetions');
const CrudRepo = require('./Crud-Repo');

class queRepo extends CrudRepo{

    constructor(){
        super(Questions);
    }

};

module.exports = queRepo;