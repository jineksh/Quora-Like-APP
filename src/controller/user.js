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

const Signin = async (req, res) => {
    try {
        const token = await service.Signin(req.body.email,req.body.password);
        return res.status(StatusCodes.OK).json({
            Description: 'Login successful.',
            Token : token,
            Response: StatusCodes.OK,
            success: true,
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            Description: 'Something went wrong. Please try again later.',
            Response: error,
            success: false,       
        })
    }
}

module.exports = {
    create,Signin
}