import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../../comment/models';
import { ProductModel } from '../../product/models';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000';
  private productUrl = this.baseUrl + '/products';
  private commentUrl = this.baseUrl + '/comments';

  getProducts(): Observable<Array<ProductModel>> {
    return this.http.get<Array<ProductModel>>(this.productUrl);
  }

  getCommentsByProductId(id: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(this.commentUrl + '/?product_id=' + id);
  }
}
