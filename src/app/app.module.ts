import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ListPostComponent } from "./post/list-post/list-post.component";
import { PostComponent } from "./post/post.component";
import { ItemPostComponent } from "./post/list-post/item-post/item-post.component";
import { PostService } from "./post/post.service";
import { UserService } from "./post/user.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPostComponent,
    PostComponent,
    ItemPostComponent
  ],
  imports: [BrowserModule],
  providers: [PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
