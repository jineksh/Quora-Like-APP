const Answer = require('../model/Answer.js');
const CrudRepo = require('./Crud-Repo');




class ansRepo extends CrudRepo {

    constructor() {
        super(Answer);
    }

}

module.exports = ansRepo;