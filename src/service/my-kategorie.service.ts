import { Injectable } from '@angular/core';
import { Kategorie } from '../model/kategorie';

// @Injectable decorator marks this class as a service that can be injected into components or other services
@Injectable()
export class MyKategorieService {
  // Array to store all available categories (Kategorie objects)
  kategories: Kategorie[] = []; 

  constructor() {
    // Initialize the kategories array with predefined category options
    // Each category has a label (name) that describes the type of course
    this.kategories.push(
      new Kategorie('Allgemeinbildend'),  // General education, 0
      new Kategorie('Naturwissenschaften'),  // Natural sciences, 1
      new Kategorie('Wirtschaft'),  // Economics/Business, 2
      new Kategorie('Informatik')  // Computer science, 3
    );
  }
  // This service doesn't have methods to add, find, or delete categories
  // It simply provides the predefined list of categories to other components
}