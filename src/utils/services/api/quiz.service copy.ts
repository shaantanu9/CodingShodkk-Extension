import {
  CREATE_QUIZ,
  GET_QUIZZES,
  GET_QUIZ_BY_ID,
  UPDATE_QUIZ,
  DELETE_QUIZ,
  ADD_QUESTION,
  REMOVE_QUESTION,
  GET_SINGLE_QUIZ,
} from '../../../common/quiz.url';
import { HttpService } from '../http.service';

export class QuizService extends HttpService {
  constructor() {
    super();
  }

  async createQuiz(data: any) {
    return await this.post(CREATE_QUIZ, data);
  }

  async getQuizById(id: any) {
    return await this.get(GET_QUIZ_BY_ID(id));
  }

  async getQuizzes(query: any) {
    return await this.get(GET_QUIZZES, query);
  }

  async getSingleQuiz(query: any) {
    return await this.get(GET_SINGLE_QUIZ, query);
  }

  async updateQuiz(id: any, data: any) {
    return await this.put(GET_QUIZ_BY_ID(id), data);
  }

  async deleteQuiz(id: any) {
    return await this.delete(GET_QUIZ_BY_ID(id));
  }

  async addQuestion(quizId: any, question: any) {
    return await this.post(ADD_QUESTION(quizId), question);
  }

  async removeQuestion(quizId: any, questionId: any) {
    return await this.delete(REMOVE_QUESTION(quizId, questionId));
  }
}

export const _quizService = new QuizService();
