import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ListPostComponent } from "./post/list-post/list-post.component";
import { PostComponent } from "./post/post.component";
import { ItemPostComponent } from "./post/list-post/item-post/item-post.component";
import { PostService } from "./services/post.service";
import { UserService } from "./services/user.service";
import { AppRoutingModule } from "./app-routing.module";
import { EditPostComponent } from "./post/edit-post/edit-post.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostStartComponent } from "./post/post-start/post-start.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthComponent } from "./auth/auth.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { DataStorageService } from "./shared/data-storage.service";
import { DropDownDirective } from "./shared/dropdown.directive";
import { AuthInterctorService } from "./auth/auth-interceptor.service";
import { AlerComponent } from "./shared/alert/alert.component";
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPostComponent,
    PostComponent,
    ItemPostComponent,
    EditPostComponent,
    PostStartComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    DropDownDirective,
    AlerComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    UserService,
    DataStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterctorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
