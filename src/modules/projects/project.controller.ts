import { Controller, Get, Param } from '@nestjs/common';

import { Project } from './project.model';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  getProjects(): Promise<Project[]> {
    return this.projectService.getProjects();
  }

  @Get(':id')
  getProject(@Param('id') id: string): Promise<Project> {
    return this.projectService.getProject(id);
  }
}
