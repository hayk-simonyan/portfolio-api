import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './projects/project.module';

@Module({
  imports: [ConfigModule.forRoot(), ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
