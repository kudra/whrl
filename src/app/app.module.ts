import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, allmodules } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider
} from "angularx-social-login";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("156991628822104")
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [AppComponent, allmodules, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
