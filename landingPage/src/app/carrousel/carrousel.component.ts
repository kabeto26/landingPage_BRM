import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit {
  cards = [
    {
      title: '$ 1,340.230',
      description: '1700 East Walnut Ave.',
      direccion: '1700 East Walnut Ave.',
      barrio: 'Value Torius Suite 450',
      ciudad: 'El Segundo CA.',
      buttonText: 'view property details',
      img: '../assets/images/im_car_1.jpg',
      class: 'crDer'
    },
    {
      title: '$ 1,340.230',
      description: '1700 East Walnut Ave.',
      direccion: '1700 East Walnut Ave.',
      barrio: 'Value Torius Suite 450',
      ciudad: 'El Segundo CA.',
      buttonText: 'view property details',
      img: '../assets/images/im_car_1.jpg',
      class: 'crIzq'
    },
    {
      title: '$ 1,340.230',
      description: '1700 East Walnut Ave.',
      direccion: '1700 East Walnut Ave.',
      barrio: 'Value Torius Suite 450',
      ciudad: 'El Segundo CA.',
      buttonText: 'view property details',
      img: '../assets/images/im_car_1.jpg',
      class: 'crDer'
    },
    {
      title: '$ 1,340.230',
      description: '1700 East Walnut Ave.',
      direccion: '1700 East Walnut Ave.',
      barrio: 'Value Torius Suite 450',
      ciudad: 'El Segundo CA.',
      buttonText: 'view property details',
      img: '../assets/images/im_car_1.jpg',
      class: 'crIzq'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 2);
  }
}