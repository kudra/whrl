import { Component, OnInit } from "@angular/core";
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser
} from "angularx-social-login";
@Component({
  selector: "app-sociallogin",
  templateUrl: "./sociallogin.component.html",
  styleUrls: ["./sociallogin.component.css"]
})
export class SocialloginComponent implements OnInit {
  public user: SocialUser;
  public isloggedIn:boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.isloggedIn = (user != null);
    });
  }
  facebooklogin() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }
}
