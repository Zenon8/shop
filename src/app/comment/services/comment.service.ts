import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CommentModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly comments: Array<CommentModel>;
  private readonly comments$: Observable<CommentModel>;

  constructor() {
    this.comments = [
      new CommentModel(1, 1, 'John Black', new Date(2018, 10, 12), 'Very good laptop. I used it more than 1 year'),
      new CommentModel(2, 1, 'Michael Fox', new Date(2018, 11, 2), 'Is it suitable for rendering FullHD video?')
    ];

    this.comments$ = from(this.comments);
  }

  getCommentsByProductId(id: number): Observable<CommentModel> {
    return this.comments$.pipe(filter(comm => comm.product_id === id));
  }
}
