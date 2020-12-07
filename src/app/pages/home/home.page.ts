import { Component } from '@angular/core';

// Importation des plugins Capacitor
import { Plugins } from '@capacitor/core';

// On veut utiliser Storage qui se trouve dans plugins
const { Storage } = Plugins;

const STORAGE_KEY = 'fruits';

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

  // Déclaration d'un tableau ordinal
  public fruits = ['Groseilles', 'Fraises', 'Framboises', 'Bananes'];

  // Déclaration d'un objet
  public user = {
    name: 'Joe User',
    password: '123',
    role: 'admin'
  };

  // variable pour la saisie d'un nouveau fruit
  public inputFruit: string;

  public searchFruit: string;

  constructor() { }

  /**
   * Sauvegarde des données avec le moteur Storage
   */
  private persist() {
    Storage.set({
      key: STORAGE_KEY,
      value: JSON.stringify(this.fruits)
    });
  }

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

  addFruit() {
    // Ajout au tableau
    this.fruits.push(this.inputFruit);
    this.name = this.inputFruit;
    // Persistence des données
    this.persist();
  }
  // Filtre des fruits
  filterFruits() {
    // Si le champ de recherche est plein on filtre
    // sinon on retourne toute la liste
    if (this.searchFruit) {
      // Retourne tous les éléments du tableau qui commencent par
      // la valeur recherchée
      return this.fruits.filter((item) => item.startsWith(this.searchFruit));
    } else {
      return this.fruits;
    }
  }

}
