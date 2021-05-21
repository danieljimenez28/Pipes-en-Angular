import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string = 'Capitan America';
  nombre2:string = 'DaNiEl JimenEZ es EL Capitan America';

  arreglo: number[] = [1,2,3,0,3,6,7,8,9,10,18,20,21, 22, 23, 40, 41, 42, ,];

  PI: number = Math.PI;

  perc:number = 0.259;

  salario: number = 1234.5;

  activar:boolean = true;
  
  valorPromesa = new Promise<string>((resolve, reject) =>{
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  fecha:Date = new Date();
  
  idioma:string = 'es';
  videoURL:string = 'https://www.youtube.com/embed/yJTmiht-URU';
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: 20
    }
  }
}
