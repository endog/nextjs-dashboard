import "reflect-metadata";
import { Container } from "inversify";

import { ModuleADependencies } from "./moduleA";
// import { ModuleBDependencies } from "./moduleB"; // consider moduleB also has the same file

const container = new Container();
const registrationList = [ModuleADependencies];
for (const reg of registrationList) {
  new reg().register(container);
}

export default container;
