import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor(private http: HttpClient) {}

  startUser() {
    this.http
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .subscribe(responseUsers => {
        this.users = responseUsers;
      });
  }

  getUsers() {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

  getUser(userId: number): User {
    return this.users.find(user => user.id === userId);
  }
}
