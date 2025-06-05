const  ansRepo  = require('../repository/ans');
const CrudService = require('./Crud-service');

class AnsService extends CrudService {
    constructor(){
        super(ansRepo);
        this.repo = new ansRepo();
    }
}

module.exports = AnsService;


