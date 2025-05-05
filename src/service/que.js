const { queRepo } = require('../repository/index');
const CrudService = require('./Crud-service');

class queService extends CrudService{


    constructor(){
        super(queRepo);
    }

}

module.exports = queService;