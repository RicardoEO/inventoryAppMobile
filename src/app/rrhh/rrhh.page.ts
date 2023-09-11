import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.page.html',
  styleUrls: ['./rrhh.page.scss'],
})
export class RrhhPage implements OnInit {
  dataOriginal: any = [];
  data: any = [];
  constructor() { }

  ngOnInit() {
    this.getStorage();
  }

  getStorage() {
    const storage = localStorage.getItem('formulario');
    this.data = storage ? JSON.parse(storage) : [];
    this.formatEmptyData();
    this.dataOriginal = [...this.data];
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

  renuncia(activo: any) {    
  }

  despido(activo: any) {
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    console.log(this.dataOriginal)
    this.data = this.dataOriginal.filter((d: any) => {
      return d.nombreEmpleado.toLowerCase().includes(query);
    });
  }

}
