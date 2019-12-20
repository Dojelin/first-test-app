import { Component, OnInit } from "@angular/core";
import { Post } from "./post/post.model";
import { User } from "./post/user.model";
import { PostService } from "./post/post.service";
import { UserService } from "./post/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "first-test-app";

  posts: Post[];
  user: User[];

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (this.userService.getUsers.length === 0) {
      this.user = this.userService.startUser();
    }

    if (this.postService.getPost.length === 0) {
      this.posts = this.postService.startsPosts(this.user[0].id);
    }
  }
}
