const { StatusCodes } = require('http-status-codes');
const AnsService = require('../service/ans');

const service = new AnsService();

const create = async (req, res) => {
    try {
        const { questionId } = req.params;
        console.log(questionId);
        const answerData = {
            ...req.body,
            questions: questionId
        };
        const answer = await service.create(answerData);
        return res.status(StatusCodes.CREATED).json({
            message: "Answer Created Successfully",
            response: answer,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error,
            success: false,
            Description: 'Something Went Wrong',
        });
    }
};

const put = async (req, res) => {
    try {
        const { answerId } = req.params;
        const answerData = req.body;
        const updatedAnswer = await service.update(answerId, answerData);
        return res.status(StatusCodes.OK).json({
            message: "Answer Updated Successfully",
            response: updatedAnswer,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error,
            success: false,
            Description: 'Something Went Wrong',
        });
    }
}

const deleteOne = async (req, res) => {
    try {
        const { answerId } = req.params;
        await service.delete(answerId);
        return res.status(StatusCodes.OK).json({
            message: "Answer Deleted Successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error,
            success: false,
            Description: 'Something Went Wrong',
        });
    }
}



module.exports = {
    create,
    put,
    deleteOne,
};