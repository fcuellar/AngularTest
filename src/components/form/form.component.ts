import { Component, OnInit } from '@angular/core';
import { Klasse } from '../../model/klasse';
import { MyDataService } from '../../service/my-data.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyKategorieService } from '../../service/my-kategorie.service';
import { Kategorie } from '../../model/kategorie';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [FormsModule],
})
export class FormComponent implements OnInit {
  klasse: Klasse;
  // Property to hold the current grade being edited or created
  // NEED THIS TO STORE CURRENT DATA, ONCE YOU ARE DONE YOU MUST SET THIS TO EMPTY (line 92 and 80)
  
  id: number;
  // Property to store the ID from the route parameter
  // need to store an ID if we have one or not
  
  error: boolean;
  // Flag to track validation errors
  // do this to track errors
  
  constructor(
    private route: ActivatedRoute,
    // Injected to access route parameters
    // This helps the component figure out what's in the current URL. Think of it like this:
    /* When you go to a URL like /form/5, the 5 is important information
    The ActivatedRoute is like a helper that lets you grab that 5 from the URL */
        
    private router: Router,
    /* This lets the component change the page/URL when needed. It's like:
    After you save a form, you want to go back to the home page
    The Router gives you a way to say "now go to this other page" in your code */
    // Injected to enable programmatic navigation
    
    private mydataService: MyDataService,
    // Injected to access grade data
    
    private kategorieDataService: MyKategorieService
    // Injected to access categories
  ) {

    // ALL OF THIS WILL HAPPEN AT THE START OF THE PAGE
    this.error = false;
    // Initialize error flag to false, 
    
    this.klasse = new Klasse(null, null, null);
    // Create a new empty grade object
    
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this is from private route: ActivatedRoute
    // Try to get the ID from the route parameter and convert to number
    // YOU ARE CHECKING IF AN ID EXISTS BECAUSE YOU MIGHT BE EDITING A GRADE, might need to cheat that line ^ 56

    // this line means IF this.id EXISTS / NOT EMPTY (from line 56) then that means we are EDITING an existing grade/game so we have to retrieve the data, this is where we need the findByID method from the gameDataService 
    if (this.id) {
      // If we have an ID, this is an edit operation
      this.klasse = this.mydataService.findByID(this.id);
      // Load the existing grade data
      // THIS IS PUTTING THE ID's DATA INTO THE klasse variable we made in line 17 which is currently empty (line 53) 
      // THIS IF STATE IS BECAUSE WE HAVE to check if its an EDIT or now we continue to the SAVE function which is part 2 of this. 
    }
  }
 // END OF CONSTRUCTOR
  
  ngOnInit() {}
  // Lifecycle hook - empty as initialization is done in constructo

  // SAVE FUNCTION  
  save() {
    // Method called when the form is submitted
    // here you are just checking to see if your grade / game is not empty which is why you have the "!". 
    // THIS IS HOW YOU WOULD READ THIS: if NO class id OR NO class name OR no class grade, set error = to true because something is empty. ELSE continue 
    if (!this.klasse.id || !this.klasse.fachname || !this.klasse.not) {
      // Check if required fields are filled
      this.error = true;
      // Set error flag to true if validation fails
    } else {
      // If validation passes
      
      if (!this.id) {
        // If no ID from route, this is a new grade
        this.mydataService.saveNote(this.klasse);
        // Save the new grade
        this.klasse = new Klasse(null, null, null);
        // Reset the form with a new empty grade
        //  YOU ARE BASICALLY making the form empty again, klasse is the ARRAY you created at the top of the page ^
      }
      
      this.router.navigate([""]);
      // Navigate back to the home page
      // THIS IS FROM private router: Router

      //oder this.router.navigateByUrl("home");
      // Alternative way to navigate
      
      this.klasse = new Klasse(null, null, null);
      // Reset the form data, dont know if you need to do this again. 
    }
  }

  // END OF SAVE FUNCTION 

  get kategories(): Kategorie[] {
    // Getter to provide the list of categories to the template
    return this.kategorieDataService.kategories;
    // Returns the categories from the service
  }
}
