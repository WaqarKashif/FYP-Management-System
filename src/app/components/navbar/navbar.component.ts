import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public authService:AuthServiceService) { }

  
  onSignout() {
    if (window.localStorage) {
      this.authService.logout();

      this.router.navigate(['/']);
    }
  }
  ngOnInit(): void {
  }

}
