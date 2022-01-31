import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { StudentLoginService } from 'src/app/Services/Student/student-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private studentLoginService:StudentLoginService, private authService:AuthServiceService) { }
 
  errors:any
 
  onSubmit(signInForm: NgForm) {
    this.studentLoginService.studentlogin(signInForm.value).subscribe(
      (data) => {
       
        this.authService.login(data);
       

        this.router.navigate(['student-dashboard']);
      },
      (error) => {
        this.errors = error.error.detail[0];
        alert(this.errors)
      }
    );
  }
 
  ngOnInit(): void {
    
  }

}
