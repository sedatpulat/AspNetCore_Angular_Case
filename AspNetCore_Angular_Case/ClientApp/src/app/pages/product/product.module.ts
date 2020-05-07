import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductService } from '../../services/product.service';


const routes: Routes = [
  { path: '', component: ProductComponent }
];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
