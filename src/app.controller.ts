import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventsGateway } from './events/events.gateway';
import { randomInt } from 'crypto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly eventG: EventsGateway,
  ) {}

  @Get()
  getHello(): any {
    const response = [
      {
        id: 1,
        score: randomInt(10, 100),
      },
      {
        id: 2,
        score: randomInt(10, 100),
      },
      {
        id: 3,
        score: randomInt(10, 100),
      },
      {
        id: 4,
        score: randomInt(10, 100),
      },
      {
        id: 5,
        score: randomInt(10, 100),
      },
      {
        id: 6,
        score: randomInt(10, 100),
      },
      {
        id: 7,
        score: randomInt(10, 100),
      },
      {
        id: 8,
        score: randomInt(10, 100),
      },
      {
        id: 9,
        score: randomInt(10, 100),
      },
      {
        id: 10,
        score: randomInt(10, 100),
      },
    ];
    this.eventG.bump({ scores: response });
    return this.appService.getHello();
  }
}
