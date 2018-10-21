import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../../../cart/services';
import { ProductModel } from '../../models';
import { Category } from '../../models/category.enum';
import { ProductsService } from '../../services';
import { ProductComponent } from '../product/product.component';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent implements OnInit, AfterViewInit {

  products: Array<ProductModel> = [];
  private category: Category;
  @ViewChildren(ProductComponent)
  productChildList: QueryList<ProductComponent>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(param => of(param.get('category').toUpperCase()))
    ).subscribe(category => this.category = Category[category]);

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

  getProducts() {
    return this.products.filter(product => !this.category || product.category === this.category);
  }
}
