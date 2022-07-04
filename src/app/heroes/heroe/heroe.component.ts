import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  name: string = "Ironman"
  age: number = 45

  constructor() { }

  ngOnInit(): void {
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  obtainName(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name='Spiderman';
  }

  changeAge(): void {
    this.age=30;
  }

}
