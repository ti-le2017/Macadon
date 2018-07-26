import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
	{path:'', component: IndexComponent},
	{path:'shop', component: ProductComponent},
	{path:'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
