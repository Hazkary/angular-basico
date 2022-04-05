import  {Component} from '@angular/core'   

@Component({
    selector:  'app-contador',
    template: `
        
        <h1>Hola mundo</h1>

        <h3>La base es <strong>{{base}}</strong></h3>

        <button (click)="acumular(base)">{{base}}</button>

        <span>{{numero}}</span>

        <button (click)="acumular(-base)">{{-base}}</button>
        `
})
export class ContadorComponent{

    title: string = 'contador App';
    numero: number = 10;
    //esto es un metodo
    // sumar(){
    //   this.numero += 1;
    // }
    // restar(){
    //   this.numero -=1;
    // }
  base:number =5;
  
  acumular(valor:number){
    this.numero += valor;
  }
}