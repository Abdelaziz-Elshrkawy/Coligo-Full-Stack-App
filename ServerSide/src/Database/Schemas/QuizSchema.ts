import { Schema } from 'mongoose';

const QuizSchema = new Schema({
  itemText: String,
  course: String,
  topic: String,
  due: String,
  btnText: String,
});

export default QuizSchema;
