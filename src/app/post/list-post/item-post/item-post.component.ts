import { Component, OnInit } from "@angular/core";
import { PostService } from "../../post.service";
import { Post } from "../../post.model";
import { User } from "../../user.model";
import { UserService } from "../../user.service";

@Component({
  selector: "app-item-post",
  templateUrl: "./item-post.component.html",
  styleUrls: ["./item-post.component.css"]
})
export class ItemPostComponent implements OnInit {
  selectedPost: Post;
  selectedUser: User;

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.postService.postSelected.subscribe((post: Post) => {
      this.selectedPost = post;
    });
  }

  getUserName() {
    this.selectedUser = this.userService.getUser(this.selectedPost.userId);
    return this.selectedUser.name;
  }
}
