import { User } from "./../user.model";
import { Post } from "./../post.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-post",
  templateUrl: "./list-post.component.html",
  styleUrls: ["./list-post.component.css"]
})
export class ListPostComponent implements OnInit {
  user: User = new User(
    "Someone",
    {
      companyId: "CGI",
      companyName: "Consulting Global Information"
    },
    "514.123.9865"
  );

  posts: Post[] = [
    new Post("Fisrt post", "This is a first post", this.user.id),
    new Post("Secod post", "This is a secod post", this.user.id)
  ];
  constructor() {}

  ngOnInit() {}
}
