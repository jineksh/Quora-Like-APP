const Questions = require('../model/Quetions');
const Topic = require('../model/Topic');
const CrudRepo = require('./Crud-Repo');

class queRepo extends CrudRepo {

    constructor() {
        super(Questions);
    }

    async getAll(obj) {
        try {
            const { text, tag } = obj;
            const query = {};
            
            if (text) {
                query.$or =
                    [
                        { title: { $regex: text, $options: 'i' } },
                        { body: { $regex: text, $options: 'i' } }
                    ]
            }
            if (tag) {
                const topicDoc = await Topic.findOne({ name: tag });
                if(topicDoc) query.topics = topicDoc.id;
                
            }
            console.log(query);

            const que = await Questions.find(query).populate('topics','name').lean().exec();
            console.log(que);
            return que;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

};

module.exports = queRepo;