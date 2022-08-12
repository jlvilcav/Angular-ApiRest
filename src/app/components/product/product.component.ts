import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id:'',
      name:'',
    }
  };

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  onAddtoCart() {
    this.addedProduct.emit(this.product);
  }

}
