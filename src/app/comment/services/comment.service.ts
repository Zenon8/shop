import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../core/services';
import { CommentModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private restService: RestService) {}

  getCommentsByProductId(id: number): Observable<CommentModel[]> {
    return this.restService.getCommentsByProductId(id);
  }
}
