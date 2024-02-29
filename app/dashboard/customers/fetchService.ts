import { abstractService } from "./abstract.service";

export class fetchService extends abstractService {
  private params = {};
  private schema = {};
  private fetch = {};
  private message = { message: "error" };
  constructor(params: Object, schema: any, fetch: any) {
    super();
    this.params = params;
    this.schema = schema;
    this.fetch = fetch;
  }

  validation(params: Object, schema: any) {
    console.log("validationの実装", params, schema);
    return false;
  }

  async executeDb(sql: any) {
    console.log("fetchの実装", sql);
    const a = await { returnValue: { name: "田中太郎" } };
    return a;
  }

  service() {
    if (this.validation(this.params, this.schema)) {
      return { returnValue: {}, message: "error_message", error: "true" };
    }
    const a = this.executeDb(this.fetch);
    return { returnValue: "tets", message: "success", error: "" };
  }
}
