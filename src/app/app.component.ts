import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public wrapper: string = "home";


  constructor(private router: Router) {

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
            // Show loading indicator
        }

        if (event instanceof NavigationEnd) {
            // Hide loading indicator
            this.wrapper = event.url === '/' ? 'home': 'interna';
            //carousel(); //jquery custom function
            //console.log(event);
        }

        if (event instanceof NavigationError) {
            // Hide loading indicator
            // Present error to user
            console.log(event.error);
        }
    });

}
  ngOnInit() {

  }


  title = 'Inteligo Group';
}
