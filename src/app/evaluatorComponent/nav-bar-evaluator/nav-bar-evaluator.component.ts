import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-nav-bar-evaluator',
  templateUrl: './nav-bar-evaluator.component.html',
  styleUrls: ['./nav-bar-evaluator.component.scss']
})
export class NavBarEvaluatorComponent implements OnInit {

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
