import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'dbtls007!!',
    database: 'board-app',
    entities: [__dirname + '/../**/*.entity.{js,ts}'], // 엔티티를 이용한 생성
    synchronize: true // true값을 주면 애플리케이션을 다시 실행할 떄 엔티티 안에서 수정한 컬럼이 테이블에 다시 적용됨
}