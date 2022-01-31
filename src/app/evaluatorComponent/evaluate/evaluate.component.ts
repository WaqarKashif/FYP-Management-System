import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, FormArray, NgForm } from '@angular/forms';  
import { FormControl } from '@angular/forms';
import { EvaluatorService } from 'src/app/Services/Evaluator/evaluator.service';
import { ActivatedRoute, Router } from '@angular/router';


 

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent implements OnInit {

  constructor(private evaluatorService: EvaluatorService, private authService: AuthServiceService, private route: ActivatedRoute, private router:Router, private snackbar: MatSnackBar) {
    this.projectID = this.route.snapshot.paramMap.get('id');
  }

  projectID:any = null;


  onSubmit(evaluate: NgForm){
    let mainObject = evaluate.value;
    mainObject.project_id = this.projectID;
    this.evaluatorService.submitEvaluationForm(mainObject).subscribe(resp => {
      this.snackbar.open('You have evaluated', '', {duration: 1000})
      this.router.navigate(['/', 'evaluator-dashboard']);
      console.log(resp);
    });
  }

  ngOnInit(): void {
  }
 
}
