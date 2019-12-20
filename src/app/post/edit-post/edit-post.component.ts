import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post.model";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { PostService } from "../post.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"]
})
export class EditPostComponent implements OnInit {
  allUsers: User[];
  id: number;
  editMode = false;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.allUsers = this.userService.getUsers();
    console.log(this.allUsers);

    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.editMode = params["id"] != null;
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newPost = new Post(value.title, value.body, Number(value.user));

    if (this.editMode) {
      this.postService.updatePost(this.id, newPost);
    } else {
      this.postService.addPost(newPost);
    }

    console.log(this.postService.getPost());
  }
}
