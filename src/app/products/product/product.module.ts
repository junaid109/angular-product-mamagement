import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductListComponent } from '../product-list.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from '../product-guard.service';
import { ProductService } from '../product.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'products',
        canActivate: [ProductGuardService],
        component: ProductListComponent
      },
      { path: 'products/:id', component: ProductDetailComponent },])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
