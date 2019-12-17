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
  user: User[];

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.startUser();

    this.posts = this.postService.startsPosts(this.user[0].id);
  }

  onSelected(position: number) {
    this.postService.postSelected.emit(this.posts[position]);
  }
}
