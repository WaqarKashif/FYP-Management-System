import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-nav-bar-teacher',
  templateUrl: './nav-bar-teacher.component.html',
  styleUrls: ['./nav-bar-teacher.component.scss']
})
export class NavBarTeacherComponent implements OnInit {

  constructor(private router:Router, public authService:AuthServiceService) { }


  onSignout() {
    if (window.localStorage) {
      this.authService.logout();

      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

}
