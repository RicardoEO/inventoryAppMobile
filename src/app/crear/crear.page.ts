import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  formulario: any;
  serie: any;
  editando: boolean = false;
  constructor(private fb: FormBuilder,
    private alertController: AlertController,
    private router: ActivatedRoute) {
   }

  ngOnInit() {
    this.crearFormulario();
    this.router.params.subscribe(params => {
      this.serie = params['id'] ? params['id'] : null;
      if (this.serie) {
        this.editando = true;
        this.llenarFormulario();
      }
    })
  }

  llenarFormulario() {
    const storage = localStorage.getItem('formulario');
    const data = storage ? JSON.parse(storage) : [];
    const activo = data.find((item: any) => item.serie === this.serie);
    if(activo) {
      this.formulario.patchValue(activo);
    }
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      localidad: ['', Validators.required],
      serie: [''],
      anioCompra: ['', Validators.required],
      asignado: [''],
      cargo: [''],
      nombreEmpleado: [''],
    })
  }

  existeActivo(): boolean {
    const form = localStorage.getItem('formulario');
    const data = form ? JSON.parse(form) : [];
    return data.some((activo: any) => this.formulario.get('serie').value === activo.serie)
  }

  guardar() {
    console.log(this.formulario)
    if(this.formulario.valid) {
      const form = localStorage.getItem('formulario');
      if(form) {
        const data = JSON.parse(form);
        if(this.editando) {
          const index = data.findIndex((item: any) => item.serie === this.serie);
          console.log(index)
          data.splice(index, 1, this.formulario.value);
          localStorage.setItem('formulario', JSON.stringify(data));
        } else {
          if(this.existeActivo()) {
            this.presentAlert("El activo ya existe");
          } else {
            data.push(this.formulario.value);
            localStorage.setItem('formulario', JSON.stringify(data));
            this.presentAlert("Activo guardado con éxito");
            this.reiniciarFormulario();
          }
        }
      } else {
        if(this.existeActivo()) {
          this.presentAlert("El activo ya existe");
        } else {
          localStorage.setItem('formulario', JSON.stringify([this.formulario.value]));
          this.reiniciarFormulario();
        }
      }
    } else {
      Object.values(this.formulario.controls).forEach((control: any) => {
        control.markAsTouched();
      })
    }
  }

  reiniciarFormulario() {
    this.formulario.reset();
  }

  get marcaNoValido() {
    return this.formulario.get('marca').invalid && this.formulario.get('marca').touched;
  }

  get modeloNoValido() {
    return this.formulario.get('modelo').invalid && this.formulario.get('modelo').touched;
  }

  get localidadNoValido() {
    return this.formulario.get('localidad').invalid && this.formulario.get('localidad').touched;
  }

  get serieNoValido() {
    return this.formulario.get('serie').invalid && this.formulario.get('serie').touched;
  }

  get anioCompraNoValido() {
    return this.formulario.get('anioCompra').invalid && this.formulario.get('anioCompra').touched;
  }

  get asignadoNoValido() {
    return this.formulario.get('asignado').invalid && this.formulario.get('asignado').touched;
  }

  get cargoNoValido() {
    return this.formulario.get('cargo').invalid && this.formulario.get('cargo').touched;
  }

  get nombreEmpleadoNoValido() {
    return this.formulario.get('nombreEmpleado').invalid && this.formulario.get('nombreEmpleado').touched;
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Activo',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  

}
