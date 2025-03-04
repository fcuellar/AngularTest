import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { NavbarComponent } from './components/navbar/navbar.component';

//RouterModule is responsible for routing and navigation.
import { provideRouter, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { MyDataService } from './service/my-data.service';
import { FormComponent } from './components/form/form.component';
import { DetailsSeiteComponent } from './components/details-seite/details-seite.component';
import { MyKategorieService } from './service/my-kategorie.service';

// Defines Routes in the Application
// Defines the routes for the application. Each route is an object with a path and a component.
// The component associated with the path will be displayed when the URL matches that path.
const routes: Routes = [
  // Default path (empty path), routes to the HomeComponent when the URL is the root of the app.
  { path: '', component: HomeComponent },
  
  // When the URL is '/form', the FormComponent is displayed.
  { path: 'form', component: FormComponent },
  
  // When the URL is '/impressum', the ImpressumComponent is displayed.
  { path: 'impressum', component: ImpressumComponent },
  
  // When the URL is '/details-seite', the DetailsSeiteComponent is displayed.
  // This could be used to show a list or a general page of details.
  { path: 'details-seite', component: DetailsSeiteComponent },
  
  // Dynamic route for '/details-seite/:id'. The ':id' is a dynamic parameter in the URL.
  // It is used to load a specific item based on the 'id' passed in the URL.
  { path: 'details-seite/:id', component: DetailsSeiteComponent },
  
  // Another dynamic route for '/form/:id'. The ':id' is a dynamic parameter in the URL,
  // allowing the form to load specific data based on the provided 'id'.
  { path: 'form/:id', component: FormComponent },
];


// This component is the root of the Angular application and serves as the entry point to the UI.
// It contains essential elements like the navigation bar and a router outlet, where other routed components
// will be displayed based on the URL path. The router outlet acts as a placeholder that gets replaced
// by the component corresponding to the active route, making the app's structure dynamic and responsive to 
// user navigation. This component is essential for initializing the app and rendering other views.

@Component({
  // 'selector' specifies the HTML tag for this component (i.e., <app-root></app-root>)
  selector: 'app-root',
  
  // 'standalone' property makes this component a standalone component that does not require an Angular module.
  // This is a new feature in Angular that simplifies component declarations.
  standalone: true,

  // 'imports' is an array of other components and modules that are needed for this component.
  // Here, we're importing the NavbarComponent and RouterModule (for routing functionalities).
  imports: [NavbarComponent, RouterModule],
  
  // 'providers' defines the services that should be available to this component and its children.
  // 'MyDataService' and 'MyKategorieService' will be provided to this component and its descendants.
  providers: [MyDataService, MyKategorieService],
  
  // 'template' defines the HTML structure for this component.
  // The template contains the navigation bar (NavbarComponent) and a router outlet for displaying routed components.
  // The website will ALWAYS contain the navbar component, and the CURRENT component that is being displayed. 
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
})
export class App {
  // The 'name' property is a simple string, it could be used in the template if needed.
  name = 'Angular';
}

// This line bootstraps the Angular application, which means it starts the app.
// 'bootstrapApplication' is a function that tells Angular to launch the application
// by initializing the root component, in this case, the 'App' component.
// The 'App' component is the main starting point of the application where other parts of the app are displayed.
bootstrapApplication(App, { 
  // 'providers' is an array where we can define services or configurations that should be available in the app.
  // Here, we provide the 'router' configuration that allows the application to handle different pages (routes).
  // The 'provideRouter(routes)' sets up the navigation logic for the app based on the routes defined earlier.
  // 'routes' is an array where we map specific URLs (paths) to particular components in the app.
  providers: [provideRouter(routes)] 
});
