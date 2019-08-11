import { Request } from './request';
import { Weather } from '../entities';

export class HelloApi {
  static async getAll(): Promise<Weather[]> {
    return Request.get('');
  }

  static async get(id: number): Promise<Weather | null> {
    return Request.get(`hello/${id}`);
  }

  static async create(text: string, email: string): Promise<Weather> {
    return Request.post('hello');
  }
}
