import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html' 
})
export class PersonajesComponent{

  //opcion 1
  // @Input('personajesHijoEtiqueta')
  // personajesHijo: Personaje[] = [];
  //opcion 2, el nombre del array deberia ser el mismo que esta en el componente padre, main-page.component.html (personajesHijo) 
  // @Input()
  // personajesHijo: Personaje[] = [];

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ){   }

}
