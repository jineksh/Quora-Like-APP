const { topicRepo } = require('../repository/index');
const CrudService = require('./Crud-service');

const repo = new topicRepo();

class topicService extends CrudService{


    constructor(){
        super(topicRepo);
    }

     async getAll() {
            try {
                const topics = await repo.getAll();
                return topics;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }

}

module.exports = topicService;