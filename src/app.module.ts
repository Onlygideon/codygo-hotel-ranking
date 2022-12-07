import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import env from '../env.config.js';
import { HotelsModule } from './hotels/hotels.module';
import { MongooseModule } from '@nestjs/mongoose';

dotenv.config();

@Module({
  imports: [HotelsModule, MongooseModule.forRoot(env.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
