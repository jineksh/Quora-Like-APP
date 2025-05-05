const { StatusCodes } = require('http-status-codes');
const { topicService } = require('../service/index');
const service = new topicService();

const create = async (req, res) => {
    try {
        const topic = await service.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            Description: 'create a new topic',
            Body: {
                name : topic.name
            },
            Response: StatusCodes.CREATED,
            Data: topic
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            Description: 'Topic creation failed',
            Body: {},
            Response: error,
            Data: {}
        })
    }
};

const get = async (req, res) => {
    try {
        const topic  = await service.getAll();
        return res.status(StatusCodes.OK).json({
            Description: 'Retrives All Topics',
            Response: StatusCodes.OK,
            data : topic,
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
    create,get
}