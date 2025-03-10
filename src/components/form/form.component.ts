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
  
  id: number;
  // Property to store the ID from the route parameter
  
  error: boolean;
  // Flag to track validation errors
  
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
    
    private mydate: MyDataService,
    // Injected to access grade data
    
    private kategorieDataService: MyKategorieService
    // Injected to access categories
  ) {
    this.error = false;
    // Initialize error flag to false
    
    this.klasse = new Klasse(null, null, null);
    // Create a new empty grade object
    
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this is from private route: ActivatedRoute
    // Try to get the ID from the route parameter and convert to number
    
    if (this.id) {
      // If we have an ID, this is an edit operation
      this.klasse = this.mydate.findByID(this.id);
      // Load the existing grade data
    }
  }

  ngOnInit() {}
  // Lifecycle hook - empty as initialization is done in constructor

  save() {
    // Method called when the form is submitted
    
    if (!this.klasse.id || !this.klasse.fachname || !this.klasse.not) {
      // Check if required fields are filled
      this.error = true;
      // Set error flag to true if validation fails
    } else {
      // If validation passes
      
      if (!this.id) {
        // If no ID from route, this is a new grade
        this.mydate.saveNote(this.klasse);
        // Save the new grade
        this.klasse = new Klasse(null, null, null);
        // Reset the form with a new empty grade
      }
      
      this.router.navigate([""]);
      // Navigate back to the home page
      // THIS IS FROM private router: Router

      //oder this.router.navigateByUrl("home");
      // Alternative way to navigate
      
      this.klasse = new Klasse(null, null, null);
      // Reset the form data
    }
  }

  get kategories(): Kategorie[] {
    // Getter to provide the list of categories to the template
    return this.kategorieDataService.kategories;
    // Returns the categories from the service
  }
}