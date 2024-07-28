// progress constants
export const CREATE_PROGRESS = 'quiz-progress';
export const GET_PROGRESS = 'quiz-progress';
export const GET_PROGRESS_BY_ID = (id: string) => `quiz-progress/${id}`;
export const UPDATE_PROGRESS = 'quiz-progress';
export const DELETE_PROGRESS = 'quiz-progress';
export const ADD_RESPONSE = (progressId: string) =>
  `quiz-progress/${progressId}/responses`;
