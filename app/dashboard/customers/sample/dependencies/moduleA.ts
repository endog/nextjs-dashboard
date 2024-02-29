import { injectable } from "inversify";

@injectable()
class ModuleARepoImpl {
  name = "ModuleARepoImpl";
}
@injectable()
class ModuleAServiceImpl {
  name = "ModuleAServiceImpl";
}

export class ModuleADependencies {
  register(container: any) {
    // @ts-ignore
    container
      .bind<typeof ModuleARepoImpl>(ModuleADependencies.types.ModuleARepo)
      .to(ModuleARepoImpl);
    // @ts-ignore
    container
      .bind<typeof ModuleAServiceImpl>(ModuleADependencies.types.ModuleAService)
      .to(ModuleAServiceImpl);
  }

  static readonly types = {
    ModuleARepo: Symbol("ModuleARepo"),
    ModuleAService: Symbol("ModuleAService"),
  };
}
