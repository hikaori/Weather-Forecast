import { App } from '../entities';
import { Request } from './request';

export class AppApi {
  static async create(data: App): Promise<App> {
    return Request.post('app', data);
  }
}
