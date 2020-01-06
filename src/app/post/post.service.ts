import { EventEmitter } from "@angular/core";

import { Post } from "./post.model";
import { Subject } from "rxjs";

export class PostService {
  private posts: Post[];
  postSelected = new EventEmitter<Post>();
  postChanged = new Subject<Post[]>();

  startsPosts(userId: number) {
    return (this.posts = [
      new Post("First post", "This is a first post", userId),
      new Post("Secod post", "This is a secod post", userId)
    ]);
  }

  getPost() {
    if (this.posts) {
      return this.posts.slice();
    }
    return [];
  }

  getPostById(id: number): Post {
    return this.posts.find(post => post.id === Number(id));
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.postChanged.next(this.posts.slice());
  }

  updatePost(id: number, newPost: Post) {
    const index = this.posts.indexOf(this.getPostById(id));
    this.posts[index] = newPost;
    this.postChanged.next(this.posts.slice());
  }

  deletePost(id: number) {
    const index = this.posts.indexOf(this.getPostById(id));
    this.posts.splice(index, 1);
    this.postChanged.next(this.posts.slice());
  }
}
