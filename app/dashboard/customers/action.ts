"use server";
import { hello, hello2 } from "./hello";
import { fetchService } from "./fetchService";
import { myContainer } from "./inversify/inversify.config";
import { TYPES } from "./inversify/types";
import { Warrior } from "./inversify/interfaces";
import { mmModule } from "./sample/main";

export async function testFunction() {
  const helloInstance = new hello();
  return "テストfunc serverActions";
}
type a = { message: string; error: string };

export async function testOnClickFunction() {
  // 1. validation check
  // 2. call server
  // 3. return result
  mmModule();
  const ninja = myContainer.get<Warrior>(TYPES.Warrior);
  ninja.fight();
  const params = { a: "a" };
  const schema = { a: "string" };
  const fetch = { where: { id: 1 } };
  const result = new fetchService(params, schema, fetch);
  //@ts-ignore
  const returnObj: a = result.resultObj;
  return returnObj;
}
