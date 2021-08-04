export class SavePhoto {
  static readonly type = '[Photo] Add'

  constructor(public payload: any) {}
}

export class DeletePhoto {
  static readonly type = '[Photo] Delete';

  constructor(public url: string) {
  }
}
