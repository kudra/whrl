import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SocialloginComponent } from "./sociallogin/sociallogin.component";
import { UserkycComponent } from './userkyc/userkyc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransictionComponent } from './transiction/transiction.component';
const routes: Routes = [
  { path: "sociallogin", component: SocialloginComponent },
  { path: "userkyc", component: UserkycComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "transaction", component: TransictionComponent },
  { path: "", redirectTo: "sociallogin", pathMatch: "full" },
  { path: "**", component: SocialloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const allmodules = [SocialloginComponent,UserkycComponent,DashboardComponent,TransictionComponent];
