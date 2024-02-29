import { ModuleADependencies } from "./moduleA";
// import { ModuleBDependencies } from './moduleB';

const TYPES = {
  ...ModuleADependencies.types,
  // ...(new ModuleBDependencies().types),
};

export default TYPES;
