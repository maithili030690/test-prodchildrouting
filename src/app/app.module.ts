import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersDashboardComponent } from './shared/component/users-dashboard/users-dashboard.component';
import { ProductsDashboardComponent } from './shared/component/products-dashboard/products-dashboard.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './shared/component/users-dashboard/users/users.component';
import { UsersformComponent } from './shared/component/users-dashboard/usersform/usersform.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { ProductComponent } from './shared/component/products-dashboard/product/product.component';
import { ProductFormComponent } from './shared/component/products-dashboard/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersDashboardComponent,
    ProductsDashboardComponent,
    FairsComponent,
    UsersComponent,
    UsersformComponent,
    PageNotFoundComponent,
    ProductComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
