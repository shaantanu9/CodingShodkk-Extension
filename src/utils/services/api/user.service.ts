import { USER_LOGIN, USER_PROFILE } from "../../constant";

import { HttpService } from "../http.service";

export class UserAccountService extends HttpService {
  constructor() {
    super();
  }

  async loginWithToken(data: { token: string }) {
    return this.post(USER_LOGIN, data);
  }

  async registerUser(data: any) {
    return this.post(USER_LOGIN, data);
  }
  // analytics
  async getAnalytics() {
    return await this.get(USER_PROFILE("analytics"));
  }
  async getSingleUserProfile(_id: string) {
    return await this.get(USER_PROFILE(_id));
  }
}

export const _userAccountService = new UserAccountService();
