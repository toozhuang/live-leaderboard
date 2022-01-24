import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventsModule } from './events/events.module';
import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [EventsModule],
  controllers: [AppController],
  providers: [EventsGateway],
})
export class AppModule {}
