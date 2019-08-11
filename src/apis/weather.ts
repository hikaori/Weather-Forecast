import { Weather } from '../entities';
import { Request } from './request';

export class FamilySignUpApi {
  static async create(data: Weather): Promise<Weather> {
    return Request.post('weather', data);
  }
}
