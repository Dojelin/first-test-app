import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PostService } from "./services/post.service";
import { UserService } from "./services/user.service";

import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { ListPostComponent } from "./post/list-post/list-post.component";
import { PostComponent } from "./post/post.component";
import { ItemPostComponent } from "./post/list-post/item-post/item-post.component";
import { EditPostComponent } from "./post/edit-post/edit-post.component";
import { PostStartComponent } from "./post/post-start/post-start.component";
import { AuthComponent } from "./auth/auth.component";
import { AlerComponent } from "./shared/alert/alert.component";
import { DataStorageService } from "./shared/data-storage.service";
import { AuthInterctorService } from "./auth/auth-interceptor.service";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ListPostComponent,
        PostComponent,
        ItemPostComponent,
        EditPostComponent,
        PostStartComponent,
        AuthComponent,
        AlerComponent,
        LoadingSpinnerComponent
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
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterctorService,
          multi: true
        }
      ]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'first-test-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("first-test-app");
  });
});
