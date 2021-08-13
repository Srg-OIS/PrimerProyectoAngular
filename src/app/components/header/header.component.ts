import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public IniciarSesion: boolean = false;
  public closeResult: string = '';
  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }
  public iniciarSesion() {
    this.IniciarSesion = false;
  }
  public cerrarSesion() {
    this.IniciarSesion = true;
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  public abrirFormularioIniciarSesion(formularioIniciarSesion: any) {
    this.modalService.open(formularioIniciarSesion, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    }).result.then((resultado) => {
      console.log('resultado', resultado);
    }, (razonCierre) => {
      console.log('razonCierre', razonCierre);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
