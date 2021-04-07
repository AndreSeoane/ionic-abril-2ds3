import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.page.html',
  styleUrls: ['./star.page.scss'],
})
export class StarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pizza: any = {
    'semrecheio': false,
    'mussarela': false,
    'catupiry': false,
    'calabresa': false,
    'cheddar': false

  };

  verificaborda(evento) {

    this.pizza.semrecheio = false;
    this.pizza.mussarela = false;
    this.pizza.calabresa = false;
    this.pizza.catupiry = false;
    this.pizza.cheddar = false;

    if (evento.detail.checked) {
      switch (evento.srcElement.id) {
        case 'semrecheio':
          this.pizza.semrecheio = true;
          break;
        case 'mussarela':
          this.pizza.mussarela = true;
          break;
        case 'calabresa':
          this.pizza.calabresa = true;
          break;
        case 'catupiry':
          this.pizza.catupiry = true;
          break;
        case 'cheddar':
          this.pizza.cheddar = true;
          break;
      }

    }

    console.log(evento.srcElement.id);
    console.log(evento.detail);

  }



}
