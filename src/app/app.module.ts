import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { appReducers } from './store/app.reducers';
import { FormEffects } from './store/form.effects';
import { AppRoutingModule } from './app-routing.module';
import { ApplyComponent } from './apply/apply.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CanActivateRouteGuard } from './can-activate-route.guard';
import { ReviewComponent } from './review/review.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ApplyComponent,
    ConfirmComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([FormEffects]),
    AppRoutingModule,
    ButtonModule,
    ListboxModule,
    PanelModule,
    HttpClientModule
  ],
  providers: [CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
