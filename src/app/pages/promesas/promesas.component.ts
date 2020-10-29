import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const promesa = new Promise((resolve, reject) => {
      if (false) {
        resolve('hola mundo');
      } else {
        reject('Algo salio mal');
      }
    });

    promesa
      .then((mensaje) => {
        console.log(mensaje);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('xd');
  }
}
