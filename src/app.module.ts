import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { WordModule } from './word/word.module';

@Module({
  imports: [WordModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
