import { Component} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hilk', 'Thor', 'Capitan america'];
  heroeBorrado:string = '';

  borrar(){
    console.log('borrando...')
    this.heroeBorrado = this.heroes.shift() || ''; //en este caso yo utilize shift para elimiar el primer elemento
  
  }

}
