import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  nuevo: string = 'holi'
  deletedheroe: string | undefined;

  deleteHeroe() {
    this.deletedheroe = this.heroes.pop()
  }


}


