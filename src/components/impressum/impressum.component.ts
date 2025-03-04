import { Component, OnInit } from '@angular/core';
// Import the necessary Angular components:
// - Component: decorator to define a component
// - OnInit: interface for component initialization lifecycle hook

@Component({
  selector: 'app-impressum',
  // The HTML tag name to use this component (<app-impressum></app-impressum>)
  
  templateUrl: './impressum.component.html',
  // The path to the HTML template file for this component
  
  styleUrls: ['./impressum.component.css'],
  // The path to the CSS file(s) for styling this component
  
  standalone: true
  // Modern Angular approach where components don't need to be declared in a module
})
export class ImpressumComponent implements OnInit {
  // 'export' makes this class available to import elsewhere
  // 'implements OnInit' indicates this component will use the ngOnInit lifecycle hook

  constructor() { }
  // The constructor runs when the component is created
  // This one is empty since no special initialization is needed

  ngOnInit() {
    //WE DONT HAVE ANY FUNCTIONS TO RUN ON THE START, SO THIS IS EMPTY
    // For EXAMPLE IN HOME PAGE WE GET THE AVERAGE  / TOTAL EVERy TIME
    // ngOnInit lifecycle hook runs after component is created and inputs are bound
    // This method is empty since no initialization tasks are needed
    // It's kept here following Angular's component structure conventions
  }
}