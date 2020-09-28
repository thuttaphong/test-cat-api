import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import configuration from '../../config/configuration'
import { CatsModule } from '../cats/cats.module'
import { MongooseModule } from '@nestjs/mongoose'
import { TalksModule } from '../talks/talks.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    CatsModule,
    TalksModule
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {
}