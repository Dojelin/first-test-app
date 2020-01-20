export class Post {
  public id: number;
  public title: string;
  public body: string;
  public userId: number;

  constructor(title: string, body: string, userId: number) {
    this.id = Math.round(Math.random() * 456);
    this.title = title;
    this.body = body;
    this.userId = userId;
  }
}
