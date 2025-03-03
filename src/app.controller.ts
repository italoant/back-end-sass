import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class AppController {
  constructor() {}

  @Get()
  healthCheck(): string {
    return 'App works';
  }
}
