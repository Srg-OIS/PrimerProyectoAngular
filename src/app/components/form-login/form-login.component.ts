import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})

export class FormLoginComponent implements OnInit {

  public fomularioLogin: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {
    this.fomularioLogin = this.crearFormulario();
  }

  ngOnInit(): void {
  }
  private crearFormulario() {
    return this.fb.group({
      correo: ['', [Validators.required]],
      clave: ['', [Validators.required]]
    });
  }

  public iniciarSesion() {
    console.log(this.fomularioLogin.value);
  }
}
