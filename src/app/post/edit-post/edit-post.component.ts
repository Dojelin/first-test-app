import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
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
    this.userService.getUsers().subscribe(allUsers => {
      this.allUsers = allUsers;
    });

    this.route.params.subscribe((params: Params) => {
      this.id = Number(params["id"]);
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

    this.onCancel();
  }

  onDelete() {
    this.postService.deletePost(this.id);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(["/posts"]);
  }

  onClear() {
    this.postForm.reset();
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
      title: new FormControl(postTitle, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]),
      body: new FormControl(postBody, Validators.required),
      user: new FormControl(postUserId, Validators.required)
    });
  }
}
