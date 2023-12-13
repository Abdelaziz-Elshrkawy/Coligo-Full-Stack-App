import Connection from '../DBConnection';
import QuizSchema from '../Schemas/QuizSchema';
export default class QuizMethods {
  #QuizModel;
  constructor(modelName: string) {
    this.#QuizModel = Connection.model(modelName, QuizSchema);
  }
  addQuiz = async (
    itemText: string,
    course: string,
    due: string,
    topic: string,
    btnText: string,
  ) => {
    try {
      const quiz = new this.#QuizModel({
        itemText,
        course,
        due,
        topic,
        btnText,
      });
      await quiz.save();
      return quiz;
    } catch (err) {
      return err;
    }
  };

  getQuiz = async (id: string | undefined) => {
    try {
      if (id) {
        return this.#QuizModel.findOne({ _id: id });
      } else {
        return this.#QuizModel.find();
      }
    } catch (err) {
      return err;
    }
  };

  updateQuiz = async (
    id: string,
    itemText: string,
    course: string,
    due: string,
    topic: string,
    btnText: string,
  ) => {
    try {
      const quiz = await this.#QuizModel.findOne({ _id: id });
      // not null operator (!) for not-null assertion
      quiz!.itemText = itemText;
      quiz!.course = course;
      quiz!.due = due;
      quiz!.topic = topic;
      quiz!.btnText = btnText;
      await quiz?.save();
      return quiz;
    } catch (err) {
      return err;
    }
  };

  deleteQuiz = async (id: string | number) => {
    try {
      return await this.#QuizModel.deleteOne({ _id: id });
    } catch (err) {
      return err;
    }
  };
}
