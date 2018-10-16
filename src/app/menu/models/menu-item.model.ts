export class MenuItemModel {
  constructor(
    public name: string,
    public link: string,
    public children?: Array<MenuItemModel>
  ) {
  }
}
