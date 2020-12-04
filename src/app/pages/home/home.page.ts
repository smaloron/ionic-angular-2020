import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Déclaration d'une propriété de la classe
  // Le nom de l'utilisateur
  public name = 'Seb';

  public age = 50;

  //Déclaration d'un tableau ordinal
  public fruits = ['Groseilles', 'Fraises', 'Framboises', 'Bananes'];

  //Déclaration d'un objet
  public user = {
    name: 'Joe User',
    password: '123',
    role: 'admin'
  };

  constructor() { }

  public isUserHidden() {
    // Retourne vrai quand l'utilisateur n'existe pas
    return !this.user;
  }

  getListColor() {
    return this.isUserHidden() ? 'primary' : 'success';
  }

  /**
   * logout vide la variable user
   */
  public logout() {
    this.user = null;
  }

  public login() {
    this.user = {
      name: 'Jane super user',
      role: 'admin',
      password: '123'
    };
  }

}
