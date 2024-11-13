import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getItems(): Array<Menu> {
    const menu: Array<Menu> = [
      {
        name: 'Início', 
        url: '#banner' //A hashtag(#) no link da url direciona o usuário para um local específico na mesma página
      },
      {
        name: 'Sobre mim',
        url: '#about'
      },
      {
        name: 'Habilidades',
        url: '#skills'
      },
      {
        name: 'Projetos',
        url: '#projects'
      },
      {
        name: 'Contato',
        url: 'contact'
      }
    ];

    return menu;
  }
}
