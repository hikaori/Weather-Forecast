import { Request } from './request';
import { Sample } from '../entities';

export class HelloApi {
  static async getAll(): Promise<Sample[]> {
    return Request.get('hello');
  }

  static async get(id: number): Promise<Sample | null> {
    return Request.get(`hello/${id}`);
  }

  static async create(text: string, email: string): Promise<Sample> {
    return Request.post('hello');
  }
}
