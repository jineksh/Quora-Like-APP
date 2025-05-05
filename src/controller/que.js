const { queService } = require('../service/index');
const { StatusCodes } = require('http-status-codes');
const service = new queService();

const create = async (req, res) => {

    try {
        const que = await service.create(req.body);
        return res.status(StatusCodes.OK).json({
            
        })
    } catch (error) {
        console.log(error);
        throw error;
    }

}