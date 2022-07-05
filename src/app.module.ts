import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectController } from './projects/project.controller';
import { ProjectService } from './projects/project.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ProjectController],
  providers: [AppService, ProjectService],
})
export class AppModule {}
