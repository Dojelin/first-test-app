import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PostService } from "../services/post.service";
import { AuthService } from "../services/auth.service";
import { Post } from "../models/post.model";
import { environment } from "../../environments/environment";

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
      .put(environment.dbLink + "/posts.json", posts)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchPosts() {
    return this.http.get<Post[]>(environment.dbLink + "/posts.json");

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
