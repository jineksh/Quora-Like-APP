const { queRepo, topicRepo } = require('../repository/index');
const CrudService = require('./Crud-service');

class queService extends CrudService {

    constructor() {
        super(queRepo);
        this.repo = new queRepo();
        this.topicrepo = new topicRepo();
    }
    async create(data) {
        try {
            
            const inputTopics = data.topics.split(',').map(topic => topic.trim());
            const existingTopics = await this.topicrepo.getAll(inputTopics);
            const existingTopicNames = existingTopics.map(topic => topic.name);
            
            const newTopics = inputTopics.filter(topic => !existingTopicNames.includes(topic));
            if(newTopics.lenght > 0) await this.topicrepo.insert(newTopics);
           
            const topicIds = [
                ...existingTopics.map(topic => topic.id),
                ...newTopics.map(topic => topic.id)
            ];
            

            const createdQuestion = await this.repo.create({
                title: data.title.trim(),
                body: data.body.trim(),
                topics: topicIds,
                user: data.user
            });

            return createdQuestion;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll(obj){
        try {
            const que = await this.repo.getAll(obj);
            return que;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


}

module.exports = queService;