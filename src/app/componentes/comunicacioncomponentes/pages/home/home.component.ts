import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from 'src/app/componentes/comunicacioncomponentes/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    nombre: string = 'Nombre Usuario';
    constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.nombre ='fernando Zuniga';
    this.dataService.nombreUsuario= this.nombre;
  }


  hijoCambioNombre(nuevoNombre : string){
    this.nombre = nuevoNombre;
    this.dataService.nombreUsuario= nuevoNombre;
  }

}
