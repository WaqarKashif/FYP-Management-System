import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { TeacherLoginService } from 'src/app/Services/Teacher/teacher-login.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent implements OnInit {

  constructor(private router: Router, private teacherLoginService:TeacherLoginService, private authService:AuthServiceService) { }
 
  errors:any
 
  onSubmit(signInForm: NgForm) {
    this.teacherLoginService.teacherlogin(signInForm.value).subscribe(
      (data) => {
       
        this.authService.login(data);
       

        this.router.navigate(['teacher-dashboard']);
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
