import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { notionToObjectMapper } from 'src/utils/notion';
import { Project } from './project.model';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

@Injectable()
export class ProjectService {
  private notionClient = new Client({ auth: process.env.NOTION_API_KEY });
  private projects: Project[] = [];

  async getProjects(): Promise<Project[]> {
    const notionProjects = await this.getProjectsFromNotionDB();
    this.projects = notionToObjectMapper<Project>(notionProjects);
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

  private async getProjectsFromNotionDB(): Promise<QueryDatabaseResponse> {
    return await this.notionClient.databases.query({
      database_id: process.env.NOTION_PROJECTS_DATABASE_ID,
    });
  }
}
