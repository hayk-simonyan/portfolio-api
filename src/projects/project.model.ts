export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string[],
    public techStack: string[],
    public dates: string[],
    public url?: string,
    public sourceCode?: string,
    public imageUrl?: string,
  ) {}
}
