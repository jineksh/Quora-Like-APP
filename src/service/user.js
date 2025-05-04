const { UserRepo } = require('../repository/index');
const CrudService = require('./Crud-service');
const User = require('../model/User');

class UserService extends CrudService {

    constructor() {
        super(UserRepo);
        this.repo = new UserRepo();
    }

    async Signin(userEmail, userpassword) {
        try {
            const user = await this.repo.getWithEmail(userEmail);
            if (!user) {
                throw new Error('User is Not Found');
            }
            var response = await user.compare(userpassword);
            if (!response) {
                throw new Error('Password is Incoreect');
            }
            const token = await user.createToken(user.email, user.id);
            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getWithEmail(userEmail) {
        try {
            const user = await this.repo.getWithEmail(userEmail);
            return user;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserService;