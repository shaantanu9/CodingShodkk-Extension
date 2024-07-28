// quiz constants
export const CREATE_QUIZ = 'quiz';
export const GET_QUIZZES = 'quiz';
export const GET_SINGLE_QUIZ = 'quiz/url';
export const GET_QUIZ_BY_ID = (id: string) => `quiz/${id}`;
export const UPDATE_QUIZ = 'quiz';
export const DELETE_QUIZ = 'quiz';
export const ADD_QUESTION = (quizId: string) => `quiz/${quizId}/questions`;
export const REMOVE_QUESTION = (quizId: string, questionId: string) =>
  `/quiz/${quizId}/questions/${questionId}`;
