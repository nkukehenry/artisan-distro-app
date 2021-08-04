import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginPage,
    CategoriesComponent,
  ]
})
export class LoginPageModule { }
