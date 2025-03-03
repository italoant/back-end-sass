import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseUseCase {
  constructor() {}
  async exec(): Promise<string> {
    return 'this works';
  }
}
