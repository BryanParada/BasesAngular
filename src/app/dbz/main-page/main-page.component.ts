import { Component  } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {
 
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // agregarNuevoPersonaje(event: Personaje){
  //   // console.log(argumento);
  //   this.personajes.push(event);
    
  // }

  // get personajes(): Personaje[] {

  //   return this.dbzService.personajes;
  // }


  // cambiarNombre(event: any){
  //   console.log(event.target.value);
    
  // }

  //inyeccion de dependencia
  constructor(){ }

 
}
