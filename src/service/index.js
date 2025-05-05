const CrudService = require("./Crud-service");
const queService = require("./que");
const topicService = require("./topic");
const UserService = require("./user");

module.exports={
    UserService : UserService,
    CrudService : CrudService,
    queService : queService,
    topicService : topicService
}