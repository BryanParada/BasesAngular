import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 14000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];

    constructor(){
        console.log("Servicio inicializado"); 
    }

    get personajes(): Personaje[] {
        //spread separa cada elemento y crea uno nuevo 
        return [...this._personajes];
    }

    agregarPersonaje( data: Personaje){
        this._personajes.push(data);
    }

}