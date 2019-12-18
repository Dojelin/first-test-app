import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post.model";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"]
})
export class EditPostComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onAddPost(form: NgForm) {
    const value = form.value;
    const newPost = new Post(value.title, value.body, 3);
    console.log(newPost);
  }
}
