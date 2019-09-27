import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { ApplyComponent } from './apply/apply.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'apply', component: ApplyComponent },
  { path: 'page1', component: Page1Component, canActivate: [CanActivateRouteGuard] },
  { path: 'page2', component: Page2Component, canActivate: [CanActivateRouteGuard] },
  { path: 'page3', component: Page3Component, canActivate: [CanActivateRouteGuard] },
  { path: 'review', component: ReviewComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'confirm', component: ConfirmComponent, canActivate: [CanActivateRouteGuard] },
  { path: '', redirectTo: '/apply', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }