import { EventEmitter } from "@angular/core";

import { Post } from "./post.model";

export class PostService {
  private posts: Post[];
  postSelected = new EventEmitter<Post>();

  startsPosts(userId: number) {
    return (this.posts = [
      new Post("First post", "This is a first post", userId),
      new Post("Secod post", "This is a secod post", userId)
    ]);
  }

  getPost() {
    return this.posts.slice();
  }
}
