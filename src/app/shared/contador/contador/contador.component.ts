import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador: number = 0;
  base: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  acumular (valor: number) {
    this.contador += valor
  }
}
