import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure this is also in angular.json

// Third-party libraries
// import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure this line is in angular.json too!
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

AOS.init(); // Initialize animations
