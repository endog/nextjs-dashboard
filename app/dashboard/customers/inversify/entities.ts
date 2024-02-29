import { injectable, inject } from "inversify";
import "reflect-metadata";
import * as interfaces from "./interfaces";
import { TYPES } from "./types";

@injectable()
class Katana implements interfaces.Weapon {
  public hit() {
    return "cut!";
  }
}

@injectable()
class Shuriken implements interfaces.ThrowableWeapon {
  public throw() {
    return "hit!";
  }
}

@injectable()
class Ninja implements interfaces.Warrior {
  private _katana: interfaces.Weapon;
  private _shuriken: interfaces.ThrowableWeapon;

  public constructor(
    @inject(TYPES.Weapon) katana: interfaces.Weapon,
    @inject(TYPES.ThrowableWeapon) shuriken: interfaces.ThrowableWeapon
  ) {
    this._katana = katana;
    this._shuriken = shuriken;
  }

  public fight() {
    console.log("ninja fight");
    return this._katana.hit();
  }
  public sneak() {
    return this._shuriken.throw();
  }
}

export { Ninja, Katana, Shuriken };
