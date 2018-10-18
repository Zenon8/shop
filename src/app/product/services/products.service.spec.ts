import { ProductCardComponent } from './../components/product-card/product-card.component';
import {inject, TestBed} from '@angular/core/testing';
import {ProductsService} from './products.service';
import { ProductModel } from '..';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService]
    });
  });

  it('should be created', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();

    const product = new ProductCardComponent(null, null, service);

    expect(service.getImageSize(product)).toBe(400);
  }));
});
