import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../../models';
import { ProductsService } from '../../services';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  product: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.product = this.service.getProductById(+params.get('id')));
  }
}
