import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { ProductComponent } from './components/product/product.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { H1Component } from './components/h1/h1.component';
import { StartComponent } from './components/start/start.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
import { PersonIndexComponent } from './components/person/person-index/person-index.component';
import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';





@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ProductComponent,
    MenuComponent,
    FooterComponent,
    H1Component,
    StartComponent,
    PersonCreateComponent,
    PersonUpdateComponent,
    PersonIndexComponent,
    PersonDeleteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
