const {StatusCodes} = require('http-status-codes');
const { UserService } = require('../service/index');
const service = new UserService();

const create = async (req, res) => {
    try {
        const user = await service.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            Description: 'Registers a new user',
            Body: {
                username: user.userName,
                email: user.email
            },
            Response: StatusCodes.CREATED,
            Data : user
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            Description: 'User registration failed',
            Body: {},
            Response: error,
            Data : {}
        })
    }
}

module.exports = {
    create
}