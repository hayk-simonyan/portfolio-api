export class Skill {
  constructor(
    public id: string,
    public name: string,
    public category: string,
  ) {}
}

export interface ISkillGroup {
  [category: string]: Skill;
}
