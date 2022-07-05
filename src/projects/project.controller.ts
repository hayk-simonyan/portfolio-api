import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

  @Post()
  postProject(
    @Body('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string[],
    @Body('techStack') techStack: string[],
    @Body('dates') dates: string[],
    @Body('url') url?: string,
    @Body('sourceCode') sourceCode?: string,
    @Body('imageUrl') imageUrl?: string,
  ): Promise<Project> {
    return this.projectService.insertProject(
      id,
      title,
      description,
      techStack,
      dates,
      url,
      sourceCode,
      imageUrl,
    );
  }
}
