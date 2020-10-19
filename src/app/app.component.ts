import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public wrapper: string = "";

  constructor(private router: Router) {

    console.log(this.constructor.name);

  }

  ngOnInit() {
      this.wrapper = this.router.url === '/organizacion' || this.router.url === '/'? 'home': 'interna';
      this.wrapper = "interna";
      console.log(this.router.url);
  }


  title = 'Inteligo Group';
}
