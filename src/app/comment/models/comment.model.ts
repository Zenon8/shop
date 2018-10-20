export class CommentModel {
  constructor(
    public id: number,
    public product_id: number,
    public author: string,
    public created: Date,
    public text: string
  ) {}
}
