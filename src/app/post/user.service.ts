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

  getUser(userId: number): User {
    return this.users.find(user => user.id === userId);
  }

  getUsers() {
    if (!this.users) {
      this.users = this.startUser();
    }

    return this.users.slice();
  }
}
