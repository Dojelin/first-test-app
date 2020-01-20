import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
import { UserService } from "../services/user.service";
import { Post } from "../models/post.model";
import { User } from "../models/user.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
