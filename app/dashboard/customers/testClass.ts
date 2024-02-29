import { hello } from "./hello";

export class testClass {
  constructor() {
    console.log("instance of testClass created");
  }

  async getLog() {
    "use server";
    console.log("client logの出力を試みる");
  }
  async getTest() {
    "use server";
    return "クラスのリターンを表示しちゃうぞ!!!";
  }
}
