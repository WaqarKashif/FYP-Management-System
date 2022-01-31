import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EvaluatorService } from 'src/app/Services/Evaluator/evaluator.service';

@Component({
  selector: 'app-add-evaluator',
  templateUrl: './add-evaluator.component.html',
  styleUrls: ['./add-evaluator.component.scss']
})
export class AddEvaluatorComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private router: Router, private evaluator: EvaluatorService) { }



  onSubmit(addevaluator: NgForm) {
    this.evaluator.createEvaluator(addevaluator.value).subscribe((data) => {
      this.snackbar.open('New Evaluator Created', '', { duration: 1000 })
      this.router.navigate(['admin-dashboard']);
    });
  }

  ngOnInit(): void {
  }

}
