import { Component, DoCheck } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule,],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements DoCheck {

  showNavbar = true;
  constructor(private router: Router) { }

  ngDoCheck(): void {
    let currentUrl = this.router.url;
    if (currentUrl === '/login' || currentUrl === '/register') {
      this.showNavbar = false;
    } else {
      this.showNavbar = true;
    }
  }


}
