import { Component, OnInit } from '@angular/core';
import { ContadorService } from './contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador: number = 0;
  base: number = 5;
  character$: any;

  constructor(private _contadorService: ContadorService) { 

  }

  ngOnInit(): void {
  }

  acumular (valor: number) {
    this.contador += valor
  }
}
