import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {


//Los @Input() son los encargados de llavar datos del padre al hijo
@Input() nombreHijo: string = 'sin nombre';
@Output() cambioNombreHijo = new EventEmitter<string>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }


  cambiarNombre(){
    this.nombreHijo = 'Pepito Perez';
    this.cambioNombreHijo.emit(this.nombreHijo);
  this.dataService.nombreUsuario = this.nombreHijo;
  }

}
