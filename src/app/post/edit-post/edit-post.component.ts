import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { Post } from "../post.model";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { PostService } from "../post.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"]
})
export class EditPostComponent implements OnInit {
  allUsers: User[];
  id: number;
  editMode = false;
  postForm: FormGroup;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.allUsers = this.userService.getUsers();

    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.editMode = params["id"] != "new";
      this.initForm();
    });
  }

  onSubmit() {
    const form = this.postForm;
    const newPost = new Post(
      form.value.title,
      form.value.body,
      Number(form.value.user)
    );

    if (this.editMode) {
      newPost.id = this.id;
      this.postService.updatePost(this.id, newPost);
    } else {
      this.postService.addPost(newPost);
    }

    console.log(this.postService.getPost());
    this.onCancel();
  }

  onDelete() {
    this.postService.deletePost(this.id);
  }

  onCancel() {
    this.router.navigate(["/posts"]);
  }

  private initForm() {
    let postTitle = "";
    let postBody = "";
    let postUserId = null;

    if (this.editMode) {
      const post = this.postService.getPostById(this.id);

      postTitle = post.title;
      postBody = post.body;
      postUserId = post.userId;
    }

    this.postForm = new FormGroup({
      title: new FormControl(postTitle),
      body: new FormControl(postBody),
      user: new FormControl(postUserId)
    });
  }
}
