import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList: any[];
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(result => {
      this.productList = result;
    }, error => console.log(error));
  }

  ngOnInit() {
  }
  onScroll() {
    console.log('onScroll');
  }

}
