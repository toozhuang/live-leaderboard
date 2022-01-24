import { Controller, Get, Post } from '@nestjs/common';
import { EventsGateway } from './events/events.gateway';
import { randomInt } from 'crypto';
import { Score } from './events/dto/score.type';

interface Response {
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly socketEvent: EventsGateway) {}

  @Get()
  pushDifferentEvent(): Response {
    const eventList: Score[] = [
      {
        id: '1',
        score: randomInt(10, 100),
        name: '小周',
      },
      {
        id: '2',
        score: randomInt(10, 100),
        name: '小壮',
      },
      {
        id: '3',
        score: randomInt(10, 100),
        name: '大沐',
      },
      {
        id: '4',
        score: randomInt(10, 100),
        name: '小夏',
      },
      {
        id: '5',
        score: randomInt(10, 100),
        name: '鹌鹑',
      },
      {
        id: '6',
        score: randomInt(10, 100),
        name: '旺旺',
      },
      {
        id: '7',
        score: randomInt(10, 100),
        name: '思思',
      },
      {
        id: '8',
        score: randomInt(10, 100),
        name: '老简',
      },
      {
        id: '9',
        score: randomInt(10, 100),
        name: '阿奎',
      },
      {
        id: '10',
        score: randomInt(10, 100),
        name: '大铁驴',
      },
    ];
    const sortedEventList = eventList.sort((a, b) => b.score - a.score);
    this.socketEvent.bump({ scores: sortedEventList });
    return { message: 'score pushed' };
  }

  @Post()
  pushSameEvent(): Response {
    const eventList: Score[] = [
      {
        id: '1',
        score: 99,
        name: '小周',
      },
      {
        id: '2',
        score: 88,
        name: '小壮',
      },
      {
        id: '3',
        score: 77,
        name: '大沐',
      },
      {
        id: '4',
        score: 66,
        name: '小夏',
      },
      {
        id: '5',
        score: 55,
        name: '鹌鹑',
      },
      {
        id: '6',
        score: 44,
        name: '旺旺',
      },
      {
        id: '7',
        score: 33,
        name: '思思',
      },
      {
        id: '8',
        score: 22,
        name: '老简',
      },
      {
        id: '9',
        score: 11,
        name: '阿奎',
      },
      {
        id: '10',
        score: 1,
        name: '大铁驴',
      },
    ];
    const sortedEventList = eventList.sort((a, b) => b.score - a.score);
    this.socketEvent.bump({ scores: sortedEventList });
    return { message: 'score pushed' };
  }
}
