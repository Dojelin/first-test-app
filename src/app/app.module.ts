import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ListPostComponent } from "./post/list-post/list-post.component";
import { PostComponent } from "./post/post.component";
import { ItemPostComponent } from "./post/list-post/item-post/item-post.component";
import { PostService } from "./post/post.service";
import { UserService } from "./post/user.service";
import { AppRoutingModule } from "./app-routing.module";
import { EditPostComponent } from "./post/edit-post/edit-post.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostStartComponent } from "./post/post-start/post-start.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPostComponent,
    PostComponent,
    ItemPostComponent,
    EditPostComponent,
    PostStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
