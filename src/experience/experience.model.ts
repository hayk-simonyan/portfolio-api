export class Experience {
  constructor(
    public id: string,
    public title: string,
    public companyName: string,
    public companyUrl: string,
    public dates: {
      start: string;
      end: string;
      timezone: string;
    },
  ) {}
}
