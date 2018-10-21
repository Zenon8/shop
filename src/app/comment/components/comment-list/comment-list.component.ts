import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from '../../models';
import { CommentService } from '../../services';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input()
  productId: number;
  comments: Array<CommentModel> = [];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getCommentsByProductId(this.productId)
      .subscribe(comments => this.comments = [...comments]);
  }

}
