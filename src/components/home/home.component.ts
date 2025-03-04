import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../../service/my-data.service';
import { Klasse } from '../../model/klasse';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports: [RouterLink]
})
export class HomeComponent implements OnInit {
 averageNote: number = 0;

  constructor(private myDate: MyDataService) { }

  ngOnInit() {
  // Beim Initialisieren den Durchschnitt berechnen
  this.calculateAverage();
  }
  get noten (): Klasse[]{
    return this.myDate.noten
  }
  delete(note: Klasse)
{ this.myDate.delete(note);
  this.calculateAverage();  // Durchschnitt nach Löschung aktualisieren
}

// Berechnung des Durchschnitts
calculateAverage() {
  const totalNotes = this.noten.reduce((sum, n) => {
    // Überprüfen, ob n.not gültig ist, bevor es in die Berechnung einbezogen wird
    return n.not != null ? sum + n.not : sum;
  }, 0);

  // Durchschnitt berechnen und auf zwei Dezimalstellen runden
  this.averageNote = this.noten.length 
    ? parseFloat((totalNotes / this.noten.length).toFixed(2)) 
    : 0;
}

}