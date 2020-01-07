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

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.startUser();

    this.postService.startsPosts();
  }
}
