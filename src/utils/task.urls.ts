export const CREATE_TASK = "/tasks";
export const GET_TASK_BY_ID = (id: string) => `/tasks/${id}`;
export const GET_TASKS_BY_USER = (userId: string) => `/tasks/user/${userId}`;
export const GET_TASKS_ASSIGNED_TO_USER = (userId: string) =>
  `/tasks/assigned/${userId}`;
export const GET_PERSONAL_TASKS = (userId: string) =>
  `/tasks/personal/${userId}`;
export const GET_COMPANY_TASKS = (companyId: string) =>
  `/tasks/company/${companyId}`;
export const UPDATE_TASK = (id: string) => `/tasks/${id}`;
export const DELETE_TASK = (id: string) => `/tasks/${id}`;
export const ASSIGN_TASK = (id: string) => `/tasks/assign/${id}`;
export const REASSIGN_TASK = (id: string) => `/tasks/reassign/${id}`;
export const MARK_TASK_AS_COMPLETED = (id: string) => `/tasks/complete/${id}`;
export const ADD_COMMENT_TO_TASK = (id: string) => `/tasks/comment/${id}`;
export const ADD_ATTACHMENT_TO_TASK = (id: string) => `/tasks/attachment/${id}`;
export const REMOVE_ATTACHMENT_FROM_TASK = (id: string) =>
  `/tasks/attachment/${id}`;
export const GET_TASK_LISTING = "tasks/listing";
export const UPDATE_TASK_STATUS = (id) => `/tasks/status/${id}`;
