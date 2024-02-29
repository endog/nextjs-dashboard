export class hello {
  constructor() {
    console.log("helloが呼ばれた");
  }

  async getTest() {
    "use server";
    return "hello from hello class";
  }
}

export class hello2 {
  constructor() {
    console.log("hello2 が呼ばれた");
  }
}
