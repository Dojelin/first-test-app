import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostComponent } from "./post/post.component";
import { EditPostComponent } from "./post/edit-post/edit-post.component";
import { PostStartComponent } from "./post/post-start/post-start.component";
import { ItemPostComponent } from "./post/list-post/item-post/item-post.component";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/posts", pathMatch: "full" },
  {
    path: "posts",
    component: PostComponent,
    children: [
      { path: "", component: PostStartComponent },
      { path: ":id", component: ItemPostComponent }
    ]
  },
  {
    path: "edit-post/:id",
    component: EditPostComponent
  },
  { path: "auth", component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
