import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostComponent } from "./post.component";
import { ListPostComponent } from "./list-post/list-post.component";
import { AppRoutingModule } from "../app-routing.module";
import { PostStartComponent } from "./post-start/post-start.component";
import { ItemPostComponent } from "./list-post/item-post/item-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostService } from "../services/post.service";
import { UserService } from "../services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { AuthComponent } from "../auth/auth.component";
import { AlerComponent } from "../shared/alert/alert.component";
import { LoadingSpinnerComponent } from "../shared/loading-spinner/loading-spinner.component";

describe("PostComponent", () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListPostComponent,
        PostComponent,
        PostStartComponent,
        ItemPostComponent,
        EditPostComponent,
        AuthComponent,
        AlerComponent,
        LoadingSpinnerComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [PostService, UserService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
