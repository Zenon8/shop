import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../../cart/services/cart.service';
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  products: Promise<Array<ProductModel>>;
  @ViewChildren(ProductComponent)
  productChildList: QueryList<ProductComponent>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.cartService.removeEvent.subscribe(pr => this.productsService.returnToList(pr));
  }

  ngAfterViewInit(): void {
    this.productChildList.forEach(pr => console.log(pr));
  }

  onAddProductToCart(product: ProductModel) {
    this.productsService.subtract(product);
    this.cartService.addToCard(product);
  }
}
