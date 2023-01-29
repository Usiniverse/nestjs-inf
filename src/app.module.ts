import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), // TypeORM 사용 등록
    BoardsModule
  ],
})
export class AppModule {}
