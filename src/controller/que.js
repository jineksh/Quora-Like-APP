const { queService } = require('../service/index');
const { StatusCodes } = require('http-status-codes');
const service = new queService();

const create = async (req, res) => {

    try {
        const que = await service.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            message: 'Que Created Successfully',
            Response: StatusCodes.OK,
            Data: que
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error,
            sucess: false,
            Description: 'Please Post Again later',
        })
    }

}

const getAll = async (req, res) => {
    try {
        const obj = req.query;
        const que = await service.getAll(obj);
        return res.status(StatusCodes.OK).json({
            message : "Questions Fetched",
            response : que,
            sucess : true
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error,
            sucess: false,
            Description: 'Something Went Wrong',
        })
    }
}

module.exports = {
    create,getAll
}