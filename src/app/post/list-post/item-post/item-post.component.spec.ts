import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemPostComponent } from "./item-post.component";
import { PostService } from "../../post.service";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "../../user.service";
import { AppRoutingModule } from "src/app/app-routing.module";
import { PostComponent } from "../../post.component";
import { PostStartComponent } from "../../post-start/post-start.component";
import { EditPostComponent } from "../../edit-post/edit-post.component";
import { ListPostComponent } from "../list-post.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthComponent } from "src/app/auth/auth.component";
import { AlerComponent } from "src/app/shared/alert/alert.component";
import { LoadingSpinnerComponent } from "src/app/shared/loading-spinner/loading-spinner.component";

describe("ItemPostComponent", () => {
  let component: ItemPostComponent;
  let fixture: ComponentFixture<ItemPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemPostComponent,
        PostComponent,
        PostStartComponent,
        EditPostComponent,
        ListPostComponent,
        AuthComponent,
        AlerComponent,
        LoadingSpinnerComponent
      ],
      imports: [
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [PostService, UserService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
