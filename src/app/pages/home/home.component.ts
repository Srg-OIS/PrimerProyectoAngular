import { Component, OnInit } from '@angular/core';
type url = string;
interface ImagenBanner{
  titulo: string;
  descripcion: string;
  imagen: url;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imagenesBanner: Array<ImagenBanner> = [
    {
      titulo: 'Primer imagen del Carrusell',
      descripcion: 'Descripcion de la imangen 1',
      imagen: 'assets/images/Software1.jpg'
    },
     {
      titulo: 'Segunda imagen del Carrusell',
      descripcion: 'Descripcion de la imangen 2',
      imagen: 'assets/images/Software2.jpg'
    },
    {
      titulo: 'Tercera imagen del Carrusell',
      descripcion: 'Descripcion de la imangen 3',
      imagen: 'assets/images/Software3.jpg'
    },
     {
      titulo: 'Cuarta imagen del Carrusell',
      descripcion: 'Descripcion de la imangen 4',
      imagen: 'assets/images/Software4.jpg'
     }
    , {
      titulo: 'Quinta imagen del Carrusell',
      descripcion: 'Descripcion de la imangen 5',
      imagen: 'assets/images/Software5.jpg'
    },{
      titulo: 'Sexta imagen del Carrusell',
      descripcion: 'Descripcion de la imangen 6',
      imagen: 'assets/images/Software6.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
