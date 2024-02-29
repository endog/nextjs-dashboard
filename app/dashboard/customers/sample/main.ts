import container from "./dependencies/inversify.config";
import TYPES from "./dependencies/types";

export function mmModule() {
  console.log(container.get(TYPES.ModuleARepo));
}
