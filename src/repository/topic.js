const Topics = require('../model/Topic');
const CrudRepo = require('./Crud-Repo');
  // print the model for debugging purposes
class topicRepo extends CrudRepo {

    constructor() {
        super(Topics);
    }
     
    async getAll(data) {
        try {
            const topics = await Topics.find({name :  { $in: data } });
              // print the found topics for debugging purposes
            return topics;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async insert(data){
        try {
            const topic = data.map(name =>  ({ name }));
            const topics = await Topics.insertMany(topic);
            return topics;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};

module.exports = topicRepo;