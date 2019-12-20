import { User } from "./../user.model";
import { Post } from "./../post.model";
import { Component, OnInit } from "@angular/core";
import { PostService } from "./../post.service";
import { UserService } from "./../user.service";

@Component({
  selector: "app-list-post",
  templateUrl: "./list-post.component.html",
  styleUrls: ["./list-post.component.css"]
})
export class ListPostComponent implements OnInit {
  posts: Post[];
  users: User[];

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.users = this.userService.getUsers();

    this.postService.postChanged.subscribe((posts: Post[]) => {
      this.posts = posts;
    });

    this.posts = this.postService.getPost();
  }

  onSelected(position: number) {
    this.postService.postSelected.emit(this.posts[position]);
  }

  getUserName(userId: number) {
    return this.userService.getUser(userId).name;
  }
}
