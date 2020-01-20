import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Subscription } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private authService: AuthService,
    private dataService: DataStorageService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true; // !!user
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onStore() {
    this.dataService.storePosts();
  }

  onFetch() {
    this.dataService.fetchPosts();
  }

  onLogout() {
    this.authService.logout();
  }
}
