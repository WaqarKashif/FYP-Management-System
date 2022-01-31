import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, FormArray, NgForm } from '@angular/forms';  
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { EvaluatorService } from 'src/app/Services/Evaluator/evaluator.service';

@Component({
  selector: 'app-edit-evaluator',
  templateUrl: './edit-evaluator.component.html',
  styleUrls: ['./edit-evaluator.component.scss']
})
export class EditEvaluatorComponent implements OnInit {

  constructor(private authService:AuthServiceService,private evaluator:EvaluatorService  ,private snackbar: MatSnackBar, private router:Router) { }

  evaluatorID = this.authService.userid
  evaluator_name:any = '';
  email:any = '';
  address:any = '';
  phone:any = '';


  fetchSingleEvaluator(id:any) {
    return this.evaluator.getSingleEvaluator(id).subscribe(
      (res: any) => {
      this.evaluator_name = res.evaluator_name
      this.email = res.email
      this.address = res.address
      this.phone = res.phone
   
    })
  }


  onSubmit(evaluatorForm: NgForm) {
  let mainObject = evaluatorForm.value
    mainObject.id = this.authService.userid
    this.evaluator.updateEvaluator(mainObject).subscribe((data) => {
      this.snackbar.open('You have updated your profile', '', {duration: 1000})
      this.router.navigate(['evaluator-dashboard']);
    });
  }
  
  ngOnInit(): void {
    this.fetchSingleEvaluator(this.evaluatorID)
  }
 
}

