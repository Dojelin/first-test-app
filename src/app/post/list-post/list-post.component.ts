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
  users: User[];

  page: number = 0;
  pageSize: number = 5;
  collectionSize: number = 0;

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(allUsers => {
      this.users = allUsers;
    });

    this.postService.postChanged.subscribe((posts: Post[]) => {
      this.posts = posts;
      this.collectionSize = this.posts ? this.posts.length : 0;
    });

    this.posts = this.postService.getPosts();
    this.collectionSize = this.posts ? this.posts.length : 0;
  }

  getUserName(userId: number) {
    return this.userService.getUser(userId).name;
  }

  getPostPaginated(page: number): Post[] {
    if (page < this.collectionSize / this.pageSize) {
      return this.posts.slice(
        page * this.pageSize,
        page * this.pageSize + this.pageSize
      );
    } else {
      return this.posts.slice(
        page * this.pageSize - this.pageSize,
        page * this.pageSize
      );
    }
  }

  fakeArray(): Array<any> {
    let length: number = 0;

    if (this.collectionSize % this.pageSize > 0) {
      const totalPages: number = this.collectionSize / this.pageSize;
      length = parseInt(totalPages.toString()) + 1;
    } else {
      length = this.collectionSize / this.pageSize;
    }

    if (length >= 0) {
      return new Array(length);
    }
  }

  setPage(page: number) {
    this.page = page;
  }
  setLastPage() {
    const totalPages: number = this.collectionSize / this.pageSize;
    this.page = parseInt(totalPages.toString());
  }
  setFirstPage() {
    this.page = 0;
  }
}
