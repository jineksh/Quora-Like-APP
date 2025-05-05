const Topics = require('../model/Topic');
const CrudRepo = require('./Crud-Repo');

class topicRepo extends CrudRepo {

    constructor() {
        super(Topics);
    }


    async getAll() {
        try {
            const topics = await Topics.find({});
            return topics;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};

module.exports = topicRepo;