import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from 'src/app/components/person/person.component';
import { ProductComponent } from 'src/app/components/product/product.component';
import { StartComponent } from 'src/app/components/start/start.component';
//import { PersonIndex } from 'src/app/components/person/person-index/person-index.component';



const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'person', component: PersonComponent },
  //{ path: 'person', component: PersonIndex },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
