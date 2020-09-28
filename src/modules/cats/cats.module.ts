import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsGateway } from './cats.gateway'
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schema/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatsService, CatsGateway],
  controllers: [CatsController]
})
export class CatsModule { }