const CrudRepo = require('./Crud-Repo');
const queRepo = require('./Que');
const topicRepo = require('./topic');

module.exports={
    UserRepo : require('./user'),
    CrudRepo : require('./Crud-Repo'),
    queRepo : queRepo,
    topicRepo : topicRepo
}