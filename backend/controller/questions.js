import Question from "../models/questions.js"
export const getQuestions = async (req, res, next) => {
    try {   
        const questions = await Question.find();        
        res.status(200).json(questions);
    } catch (error) {
        next(error)
    }
}
export const insertManyQuestions = async (req, res, next) => {
    try {
        await Question.insertMany(req.body);
        res.status(200).json({ message: "Questions has been inserted successfully" })
    } catch (error) {
        next(error)
    }
}