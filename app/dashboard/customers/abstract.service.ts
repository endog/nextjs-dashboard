export abstract class abstractService {
  public resultObj: { returnValue: object; message: string; error: string } = {
    returnValue: {},
    message: "",
    error: "",
  };
  constructor() {
    this.resultObj = this.service();
  }

  abstract validation(params: Object, schema: any): boolean;
  abstract executeDb(sql: any): Object;
  abstract service(): { returnValue: Object; message: string; error: string };
}
