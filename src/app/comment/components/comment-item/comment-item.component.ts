import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from '../../models';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input()
  comment: CommentModel;

  constructor() {
  }

  ngOnInit() {
  }
}
