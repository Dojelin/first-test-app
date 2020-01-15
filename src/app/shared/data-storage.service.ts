import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { PostService } from "../post/post.service";
import { AuthService } from "../auth/auth.service";
import { Post } from "../post/post.model";
import { take, exhaustMap } from "rxjs/operators";

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private postService: PostService,
    private authService: AuthService
  ) {}

  storePosts() {
    const posts = this.postService.getAllPost();

    this.http
      .put("https://testpost-e3867.firebaseio.com/posts.json", posts)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchPosts() {
    return this.http.get<Post[]>(
      "https://testpost-e3867.firebaseio.com/posts.json"
    );

    // // old way without the interceptor
    // return this.authService.user.pipe(
    //   take(1),
    //   exhaustMap(user => {
    //     return this.http.get<Post[]>(
    //       "https://testpost-e3867.firebaseio.com/posts.json",
    //       {
    //         params: new HttpParams().set("auth", user.token)
    //       }
    //     );
    //   })
    // );
  }
}
