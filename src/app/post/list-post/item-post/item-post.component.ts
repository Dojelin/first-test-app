import { Component, OnInit } from "@angular/core";
import { PostService } from "../../../services/post.service";
import { Post } from "../../../models/post.model";
import { User } from "../../../models/user.model";
import { UserService } from "../../../services/user.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-item-post",
  templateUrl: "./item-post.component.html",
  styleUrls: ["./item-post.component.css"]
})
export class ItemPostComponent implements OnInit {
  selectedPost: Post;
  selectedUser: User;
  postId: number;

  constructor(
    private postService: PostService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.postId = +params["id"];
      this.selectedPost = this.postService.getPostById(this.postId);
    });

    this.postService.postSelected.subscribe((post: Post) => {
      this.selectedPost = post;
    });
  }

  getUserName() {
    this.selectedUser = this.userService.getUser(this.selectedPost.userId);
    return this.selectedUser.name;
  }
}
