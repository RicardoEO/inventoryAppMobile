import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.page.html',
  styleUrls: ['./consultar.page.scss'],
})
export class ConsultarPage implements OnInit {
  data: any[] = [];
  formulario: any;
  @ViewChild('filtro', { static: false }) acordeonCard!: ElementRef;
  @ViewChild('title', { static: false }) title!: ElementRef;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      marca: [''],
      modelo: [''],
      localidad: [''],
      serie: ['']
    })
  }

  hide() {
    this.acordeonCard.nativeElement.classList.toggle('hide');
    this.title.nativeElement.classList.toggle('active');
  }

  buscarData() {
    const storage = localStorage.getItem('formulario');
    this.data = storage ? JSON.parse(storage) : [];
    if(this.data.length > 0 ) {
      this.cargarTabla();
      this.formatEmptyData();
      console.log(this.acordeonCard)
      this.acordeonCard.nativeElement.classList.add('hide');
      this.title.nativeElement.classList.add('active');
    }
  }

  formatEmptyData() {
    this.data.forEach((item: any) => {
      Object.keys(item).forEach((key: any) => {
        if(!item[key]) {
          item[key] = 'Sin información';
        }
      })
    })
  }

  eliminar(activo: any) {
    const index = this.data.findIndex((item: any) => item.serie === activo.serie);
    this.data.splice(index, 1);
    localStorage.setItem('formulario', JSON.stringify(this.data));
    this.cargarTabla();
  }

  cargarTabla() {
    const storage = localStorage.getItem('formulario');
    const preData = storage ? JSON.parse(storage) : [];
    if(preData.length > 0) {
      const objSelected: any = {};
      Object.keys(this.formulario.controls).forEach((key: any) => {
        if(this.formulario.get(key).value) {
          objSelected[key] = this.formulario.get(key).value;
        }
      })
      console.log(objSelected)
      this.data = preData.filter((item: any) => {
        return Object.keys(objSelected).every((key: any) => {
          return item[key] == objSelected[key];
        });
      });
    }
  }

  limpiarFormulario() {
    this.formulario.reset();
    this.data = [];
  }

  editar(activo: any) {
    this.router.navigate(['/crear', activo.serie])
  }
}
