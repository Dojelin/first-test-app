import { EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable()
export class PostService {
  private posts: Post[] = [];
  postSelected = new EventEmitter<Post>();
  postChanged = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  startsPosts() {
    this.http
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe(responsePosts => {
        this.posts = responsePosts;
        this.postChanged.next(this.posts.slice());
      });
  }

  getPosts() {
    return this.posts.slice();
  }

  getPostById(id: number): Post {
    return this.posts.find(post => post.id === Number(id));
  }

  addPost(post: Post) {
    this.http
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .subscribe(response => {
        console.log(response);
      });

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
