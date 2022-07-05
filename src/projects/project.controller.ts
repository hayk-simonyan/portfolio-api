import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.types';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  getHello(): Promise<Project[]> {
    return this.projectService.getProjects();
  }
}
