import { CREATE_PROGRESS, GET_PROGRESS, GET_PROGRESS_BY_ID, UPDATE_PROGRESS, DELETE_PROGRESS, ADD_RESPONSE } from "../../../common/quiz_progress.url";
import { HttpService } from "../http.service";

export class ProgressService extends HttpService {
  constructor() {
    super();
  }

  async createProgress(data: any) {
    return await this.post(CREATE_PROGRESS, data);
  }

  async getProgressById(id: any) {
    return await this.get(GET_PROGRESS_BY_ID(id));
  }

  async getProgress(query: any) {
    return await this.get(GET_PROGRESS, query);
  }

  async updateProgress(id: any, data: any) {
    return await this.put(GET_PROGRESS_BY_ID(id), data);
  }

  async deleteProgress(id: any) {
    return await this.delete(GET_PROGRESS_BY_ID(id));
  }

  async addResponse(progressId: any, response: any) {
    return await this.post(ADD_RESPONSE(progressId), response);
  }
}

export const _progressService = new ProgressService();
