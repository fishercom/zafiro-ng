import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img_logo = 'http://linserver.asixonline.com/inteligo-group/images/logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
