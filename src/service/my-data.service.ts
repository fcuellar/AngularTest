import { Injectable } from '@angular/core';
import { Klasse } from '../model/klasse';
import { MyKategorieService } from './my-kategorie.service';

@Injectable()
export class MyDataService {
  noten: Klasse[] = []; // Array to store "Klasse" objects

  constructor(public kategorieDataService: MyKategorieService) {
    // Initialize "noten" with a set of Klasse objects
    this.noten.push(
      new Klasse(1, "RP", 2, kategorieDataService.kategories[3], true),
      new Klasse(2, "Fwiwi", 1, kategorieDataService.kategories[2], false),
      new Klasse(3, "Fs", 2, kategorieDataService.kategories[2], true),
      new Klasse(4, "Mathe", 1, kategorieDataService.kategories[0], true),
      new Klasse(5, "VWL", 1, kategorieDataService.kategories[3], true),
      new Klasse(6, "BWL", 2, kategorieDataService.kategories[2], true),
      new Klasse(7, "REWE", 1, kategorieDataService.kategories[2], true),
      new Klasse(8, "PHY", 3, kategorieDataService.kategories[1], true),
      new Klasse(9, "Politik", 2, kategorieDataService.kategories[0], true),
      new Klasse(10, "Deutsch", 2, kategorieDataService.kategories[0], true),
      new Klasse(11, "English", 4, kategorieDataService.kategories[0], false)
    );
  }

  // Adds a new 'Klasse' object to the 'noten' array
  saveNote(klasse: Klasse) {
    this.noten.push(klasse);
  }

  // Finds a specific 'Klasse' object by its ID
  findByID(id: number): Klasse | undefined {
    return this.noten.find((n) => n.id === id);
  }

  // Deletes a 'Klasse' object from the 'noten' array by its ID
  delete(note: Klasse) {
    this.noten = this.noten.filter((n) => n.id !== note.id);
  }
}
