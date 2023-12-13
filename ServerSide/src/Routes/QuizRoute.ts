import { Router, Request, Response } from 'express';
import QuizMethods from '../Database/Models/QuizModel';

const quiz = Router();
const quizMethods = new QuizMethods('quizzes');

quiz.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { itemText, course, due, topic, btnText } = req.body;
    await quizMethods.addQuiz(itemText, course, due, topic, btnText);
    res.json({ response: 'added' });
  } catch (err) {
    res.json({ response: err });
  }
});

quiz.get('/', async (req: Request, res: Response): Promise<void> => {
  const quizId: string | undefined = req.query.id as string | undefined;
  try {
    const response = (await quizMethods.getQuiz(
      quizId as string | undefined,
    )) as [];
    console.log(response);
    if (
      typeof response === 'object' &&
      (response.length > 0 || Object.keys(response).length > 0)
    ) {
      res.json({ response });
    } else {
      res.json({ response: 'no quizs found' });
    }
  } catch (err) {
    res.json({ response: err });
  }
});

quiz.put('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, itemText, course, due, topic, btnText } = req.body;
    const updateResponse: object | unknown = await quizMethods.updateQuiz(
      id,
      itemText,
      course,
      due,
      topic,
      btnText,
    );
    res.json({ response: updateResponse });
  } catch (err) {
    res.json({ response: err });
  }
});

quiz.delete('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.query;
    const deleteResponse = await quizMethods.deleteQuiz(id as string | number);
    if (
      deleteResponse &&
      (deleteResponse as { deletedCount: string | number }).deletedCount === 1
    ) {
      res.json({ response: 'deleted' });
    } else {
      res.json({ response: 'not found' });
    }
  } catch (err) {
    res.json({ response: err });
  }
});

export default quiz;
