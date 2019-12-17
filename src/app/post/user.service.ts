import { User } from "./user.model";

export class UserService {
  private users: User[];

  startUser() {
    return (this.users = [
      new User(
        "Someone",
        {
          companyId: "CGI",
          companyName: "Consulting Global Information"
        },
        "514.123.9865"
      )
    ]);
  }

  getUser(userId: number) {
    return this.users.find(user => user.id === userId);
  }
}
