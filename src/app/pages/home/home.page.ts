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

  constructor() {}

}
