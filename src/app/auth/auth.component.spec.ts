import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthComponent } from "./auth.component";
import { LoadingSpinnerComponent } from "../shared/loading-spinner/loading-spinner.component";
import { AlerComponent } from "../shared/alert/alert.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing.module";
import { PostComponent } from "../post/post.component";
import { PostStartComponent } from "../post/post-start/post-start.component";
import { ItemPostComponent } from "../post/list-post/item-post/item-post.component";
import { EditPostComponent } from "../post/edit-post/edit-post.component";
import { ListPostComponent } from "../post/list-post/list-post.component";

describe("AuthComponent", () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthComponent,
        LoadingSpinnerComponent,
        AlerComponent,
        PostComponent,
        PostStartComponent,
        ItemPostComponent,
        EditPostComponent,
        ListPostComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
