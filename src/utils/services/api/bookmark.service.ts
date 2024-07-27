import {
  CREATE_BOOKMARK,
  GET_BOOKMARK,
  GET_BOOKMARK_BY_ID,
  GET_SUMMARY_BY_VIDEO_ID,
  // BOOKMARK_CONTENT
} from "../../constant";

import { HttpService } from "../http.service";

export class BookmarkAccountService extends HttpService {
  constructor() {
    super();
  }

  async createBookmark(data: any) {
    return await this.post(CREATE_BOOKMARK, data);
  }

  async getBookmarkById(id: any) {
    return await this.get(GET_BOOKMARK_BY_ID(id));
  }

  async getBookmarks(query: any) {
    return await this.get(GET_BOOKMARK, query);
  }
  async getSummaryByVideoId(payload: {
    title: string;
    videoId: string;
    videoDetails: string;
  }) {
    return await this.post(GET_SUMMARY_BY_VIDEO_ID, payload);
  }
}

export const _bookmarkAccountService = new BookmarkAccountService();
