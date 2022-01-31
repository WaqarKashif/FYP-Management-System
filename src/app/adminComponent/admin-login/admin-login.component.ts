import { AdminLoginService } from './../../Services/Admin/admin-login.service';
import { AuthServiceService } from './../../Services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router,private adminloginservice:AdminLoginService, private authService:AuthServiceService) { }
 
  errors:any
 
  onSubmit(signInForm: NgForm) {
    this.adminloginservice.adminlogin(signInForm.value).subscribe(
      (data) => {
        this.authService.login(data);

        this.router.navigate(['admin-dashboard']);
      },
      (error) => {
        this.errors = error.error.detail[0];
      }
    );
  }
 
  ngOnInit(): void {
    
  }
   


}
