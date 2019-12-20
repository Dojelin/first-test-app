import { Component, OnInit } from "@angular/core";
import { PostService } from "./post.service";
import { UserService } from "./user.service";
import { Post } from "./post.model";
import { User } from "./user.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
