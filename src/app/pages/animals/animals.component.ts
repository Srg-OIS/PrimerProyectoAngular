import { IAnimal } from './../../models/IAnimal';
import { animalService } from './../../services/animalService';
import { Component , OnInit} from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  public formularioAnimal: FormGroup = this.fb.group({});
  public animales: Array<IAnimal> = [];
  public animalController = new animalService();

  constructor(private fb: FormBuilder) {
    this.formularioAnimal = this.crearFormularioAnimal();
  }

  crearFormularioAnimal() {
    return this.fb.group({
      nombreCientifico: [null, [Validators.required]],
      especie: [null, [Validators.required]],
      alimentacion: [null, [Validators.required]]
    });
  }

  public agregarAnimal() {
    if (this.formularioAnimal.invalid) return;
    const animal: IAnimal = this.formularioAnimal.value;
    this.animales = this.animalController.crearAnimal(animal, this.animales)
    this.resetAnimal();
  }

  public eliminarAnimal(index: number) {
    this.animales.splice(index,1);
  }

  protected resetAnimal() {
    this.formularioAnimal.setValue({nombreCientifico:'',especie:'',alimentacion:'Indefinido'})
  }

  ngOnInit(): void {
  }

}
