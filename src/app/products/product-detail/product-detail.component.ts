import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../products/products';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += ': ${id}';
    this.product = {
      'productId': id,
      'productName': 'Leaf Blower',
      'productCode': 'GDN-001',
      'releaseDate': 'October 2017',
      'description': 'High performance leaf blower',
      'price': 39.99,
      'starRating': 3.4,
      'imageUrl': 'www.google.com/image'
    };
  }

  onBack(): void {
      this._router.navigate(['/products']);
  }

}
