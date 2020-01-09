import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { PostService } from "./post/post.service";
import { UserService } from "./post/user.service";

import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { ListPostComponent } from "./post/list-post/list-post.component";
import { PostComponent } from "./post/post.component";
import { ItemPostComponent } from "./post/list-post/item-post/item-post.component";
import { EditPostComponent } from "./post/edit-post/edit-post.component";
import { PostStartComponent } from "./post/post-start/post-start.component";

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
        PostStartComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [PostService, UserService]
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
