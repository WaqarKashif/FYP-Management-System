import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { EvaluatorLoginService } from 'src/app/Services/Evaluator/evaluator-login.service';

@Component({
  selector: 'app-evaluator-login',
  templateUrl: './evaluator-login.component.html',
  styleUrls: ['./evaluator-login.component.scss']
})
export class EvaluatorLoginComponent implements OnInit {

  constructor(private router: Router, private evaluatorLoginService:EvaluatorLoginService, private authService:AuthServiceService) { }
 
  errors:any
 
  onSubmit(signInForm: NgForm) {
    this.evaluatorLoginService.evaluatorlogin(signInForm.value).subscribe(
      (data) => {
       
        this.authService.login(data);
       

        this.router.navigate(['evaluator-dashboard']);
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
