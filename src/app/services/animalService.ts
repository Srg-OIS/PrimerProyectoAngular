import { IAnimal } from "../models/IAnimal";

export class animalService{

  public crearAnimal(animal:IAnimal, animales: Array<IAnimal>): Array<IAnimal> {
    animales.push(animal);
    return animales;
  }
}
