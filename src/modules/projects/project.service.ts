import { Injectable, NotFoundException } from '@nestjs/common';

import { NotionService } from 'src/notion/notion.service';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  private projects: Project[] = [];

  async getProjects(): Promise<Project[]> {
    this.projects = await new NotionService().getProjects<Project>();
    return [...this.projects];
  }

  async getProject(id: string): Promise<Project> {
    const project = this.projects.find((project) => project.id === id);
    if (!project) {
      throw new NotFoundException();
    }
    return { ...project };
  }

  async insertProject(
    id: string,
    title: string,
    description: string[],
    techStack: string[],
    dates: string[],
    url?: string,
    sourceCode?: string,
    imageUrl?: string,
  ): Promise<Project> {
    const newProject = new Project(
      id,
      title,
      description,
      techStack,
      dates,
      url,
      sourceCode,
      imageUrl,
    );
    this.projects.push(newProject);
    return newProject;
  }
}
