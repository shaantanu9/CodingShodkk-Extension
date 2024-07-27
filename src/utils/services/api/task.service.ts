import {
  CREATE_TASK,
  GET_TASK_BY_ID,
  GET_TASKS_BY_USER,
  GET_TASKS_ASSIGNED_TO_USER,
  GET_PERSONAL_TASKS,
  GET_COMPANY_TASKS,
  UPDATE_TASK,
  DELETE_TASK,
  ASSIGN_TASK,
  REASSIGN_TASK,
  MARK_TASK_AS_COMPLETED,
  ADD_COMMENT_TO_TASK,
  ADD_ATTACHMENT_TO_TASK,
  REMOVE_ATTACHMENT_FROM_TASK,
  GET_TASK_LISTING,
  UPDATE_TASK_STATUS,
} from '../../task.urls';

import { HttpService } from '../http.service';

export class TaskService extends HttpService {
  constructor() {
    super();
  }

  async createTask(payload: any) {
    return await this.post(CREATE_TASK, payload);
  }

  async getTaskById(id: string) {
    return await this.get(GET_TASK_BY_ID(id));
  }

  async getTasksByUser(userId: string) {
    return await this.get(GET_TASKS_BY_USER(userId));
  }

  async getTasksAssignedToUser(userId: string) {
    return await this.get(GET_TASKS_ASSIGNED_TO_USER(userId));
  }

  async getTaskListing(query: any) {
    return await this.get(GET_TASK_LISTING, query);
  }

  async getCompanyTasks(companyId: string) {
    return await this.get(GET_COMPANY_TASKS(companyId));
  }

  async updateTask(id: string, payload: any) {
    return await this.put(UPDATE_TASK(id), payload);
  }

  async deleteTask(id: string) {
    return await this.delete(DELETE_TASK(id));
  }

  async assignTask(id: string, payload: any) {
    return await this.post(ASSIGN_TASK(id), payload);
  }

  async reassignTask(id: string, payload: any) {
    return await this.post(REASSIGN_TASK(id), payload);
  }

  // async markTaskAsCompleted(id: string) {
  //   return await this.post(MARK_TASK_AS_COMPLETED(id));
  // }

  async addCommentToTask(id: string, payload: any) {
    return await this.post(ADD_COMMENT_TO_TASK(id), payload);
  }

  async addAttachmentToTask(id: string, payload: any) {
    return await this.post(ADD_ATTACHMENT_TO_TASK(id), payload);
  }

  async removeAttachmentFromTask(id: string) {
    return await this.delete(REMOVE_ATTACHMENT_FROM_TASK(id));
  }
  async updateTaskStatus(id: string, payload: any) {
    return await this.patch(UPDATE_TASK_STATUS(id), payload);
  }
}

export const _taskService = new TaskService();
