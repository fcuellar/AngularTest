import { Injectable } from '@angular/core';
import { Klasse } from '../model/klasse';
import { MyKategorieService } from './my-kategorie.service';

// @Injectable decorator marks this class as a service that can be injected into components
@Injectable()
export class MyDataService {
  // Array to store all the grade entries (Klasse objects)
  noten: Klasse[] = []; 

  // Constructor that takes MyKategorieService as a dependency
  // This allows MyDataService to access categories defined in MyKategorieService
  constructor(public kategorieDataService: MyKategorieService) {
    // Initialize the noten array with sample grade data
    // Each new Klasse object represents a course with:
    // - ID (number)
    // - Subject name (string)
    // - Grade (number)
    // - Category (reference to a Kategorie object from the kategorieDataService)
    // - Pass/fail status (boolean)
    this.noten.push(
      new Klasse(1, "RP", 20, kategorieDataService.kategories[3], true),
      new Klasse(2, "Fwiwi", 60, kategorieDataService.kategories[2], false),
      new Klasse(3, "Fs", 80, kategorieDataService.kategories[2], true),
      new Klasse(4, "Mathe", 100, kategorieDataService.kategories[0], true),
      new Klasse(5, "VWL", 23, kategorieDataService.kategories[3], true),
      new Klasse(6, "BWL", 100, kategorieDataService.kategories[2], true),
      new Klasse(7, "REWE", 77, kategorieDataService.kategories[2], true),
      new Klasse(8, "PHY", 87, kategorieDataService.kategories[1], true),
      new Klasse(9, "Politik", 45, kategorieDataService.kategories[0], true),
      new Klasse(10, "Deutsch", 89, kategorieDataService.kategories[0], true),
      new Klasse(11, "English", 54, kategorieDataService.kategories[0], false)
      // ... more sample data entries
    );
  }

  // Method to add a new grade entry to the noten array
  // Takes a Klasse object as parameter and adds it to the array
  saveNote(klasse: Klasse) {
    //Push means to add, we are adding to our array. Example: Noten[art, gym]. If we do Noten.push(science) our result is Noten[art, gym, science]
    this.noten.push(klasse);
  }

  // Method to find a specific grade entry by its ID
  // Takes an ID number as parameter
  // Returns the matching Klasse object or undefined if not found
  // The find() method returns the first element that satisfies the condition
  findByID(id: number): Klasse | undefined {
    // This means use the NOTEN array, for each noten, check if its the ID you want. If its the ID you want, return that noten.
    // noten is array of CLASSES which we definied in model/klasses.ts. Each class has an id, which is how we are able to do gym.id (noten[art, gym, computer_class])
    return this.noten.find((n) => n.id === id);
  }

  // Method to delete a grade entry from the noten array
  // Takes a Klasse object as parameter
  // Uses filter() to create a new array excluding the item with matching ID
  delete(note: Klasse) {
    //Create a new list with all grades EXCEPT the one with the ID we want to delete
    //This means our array called noten is now equal to array noten that has a filter that will exclude the class with the ID we are searching for. TLDR: Its removing the class with that id. 
    this.noten = this.noten.filter((n) => n.id !== note.id);
  }
}