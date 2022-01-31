import { AuthServiceService } from './../../Services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private router: Router, public authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  onSignout() {
    if (window.localStorage) {
      this.authService.logout();

      this.router.navigate(['/']);
    }
  }
}
