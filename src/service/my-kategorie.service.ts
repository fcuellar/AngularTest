import { Injectable } from '@angular/core';
import { Kategorie } from '../model/kategorie';

@Injectable()
export class MyKategorieService {
  kategories: Kategorie[] = []; // Array to store "Kategorie" objects

  constructor() {
    // Initialize "kategories" with a set of Kategorie objects
    this.kategories.push(
      new Kategorie('Allgemeinbildend'),
      new Kategorie('Naturwissenschaften'),
      new Kategorie('Wirtschaft'),
      new Kategorie('Informatik')
    );
  }
}
