import { Component, OnInit } from "@angular/core";
import { PostService } from "./post/post.service";
import { UserService } from "./post/user.service";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "first-test-app";

  constructor(
    private postService: PostService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userService.startUser();

    this.postService.startsPosts();

    this.authService.autoLogin();
  }
}
