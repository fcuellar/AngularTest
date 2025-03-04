import { Component, OnInit } from '@angular/core';

// Import our data service to access the grades data
import { MyDataService } from '../../service/my-data.service';

// Import the Klasse model so we can work with grade objects
import { Klasse } from '../../model/klasse';
import { RouterLink } from '@angular/router';

@Component({
  // @Component decorator: tells Angular this class is a component
  // Provides essential configuration for the component
  selector: 'app-home',  // HTML tag used to embed this component: <app-home></app-home>
  templateUrl: './home.component.html',  // Path to the HTML template
  styleUrls: ['./home.component.css'],  // Path to the CSS styles
  standalone: true,  // This is a standalone component (doesn't need an NgModule)
  imports: [RouterLink]  // Imports RouterLink for navigation buttons
})
export class HomeComponent implements OnInit {
   // export: makes this class available to import in other files
  // implements OnInit: promises this class will have an ngOnInit method
  // OnInit is an interface that forces us to implement the ngOnInit lifecycle hook

  averageNote: number = 0;  // Property to store the calculated average grade

  // Constructor: Inject the MyDataService to access the grades data
  // The 'private' keyword makes myDate available as a class property
  constructor(private myDate: MyDataService) { }

  // ngOnInit lifecycle hook: runs when the component is initialized, this runs AS SOON as the page LOADS basically.
  ngOnInit() {
    // Calculate the average grade when the component is first loaded
    this.calculateAverage();
  }

  // Getter method: creates a property called 'noten' that returns all grades
  // from the data service. This allows the HTML template to use 'noten' directly
  get noten(): Klasse[] {
    return this.myDate.noten;
  }

  // Method to delete a grade: calls the delete method in the service
  // and recalculates the average after deletion
  delete(note: Klasse) {
    this.myDate.delete(note);
    this.calculateAverage();  // Update average after deleting a grade
  }

  // Calculate the average grade from all entries
  calculateAverage() {
    // Use reduce to sum up all grades (skipping null values)
    const totalNotes = this.noten.reduce((sum, n) => {
      // the reduce function is like a for loop, 
      // check if not is not empty (n.not != null ), if not empty then do the adding
      // for every noten (n). add its GRADE (not) together (sum), return total sum
      return n.not != null ? sum + n.not : sum;
    }, 0);

    // Calculate average and round to 2 decimal places
    // If there are no grades, default to 0
    // for oly the "?" is like asking an if statement, does this.noten.length exist ? (Asking if its empty), if yes do something, if not return 0 (which is the 0 at the end)
    // if its empty, then the average is just 0. 
    this.averageNote = this.noten.length ? parseFloat((totalNotes / this.noten.length).toFixed(2)) 
      : 0;
  }
}