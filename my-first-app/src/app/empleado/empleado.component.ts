import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: "<p>Aqui iria un empleado</p>",
  styleUrls: ['./empleado.component.css']
  // styles: [
  //   "p{background-color:red;"
  // ]
})
export class EmpleadoComponent implements OnInit {

nombre="Carol";

apellido="Andrade";

edad=10;

// empresa="Trybe";

// getEdad(){
//   return this.edad;
// }

// llamaEmpresa(value:String){

// }

  constructor() { }

  ngOnInit(): void {
  }

}
