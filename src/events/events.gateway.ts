import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { Score } from './dto/score.type';

@Injectable()
@WebSocketGateway({
  cors: true,
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('scores')
  bump(@MessageBody() data: { scores: Score[] }) {
    this.server.emit('scores', data);
  }
}
