import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema({
    question: {
        type:String,
        required:true,
        unique:true
    },
    options:{
        type:[String],
        required:true
    },
    answer: {
        type:String,
        required:true
    }
});

const Question = mongoose.model("Question", QuestionSchema);
export default Question