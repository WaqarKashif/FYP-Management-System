import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/Services/Teacher/teacher.service';



@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  constructor(private teacher: TeacherService, private snackbar: MatSnackBar, private router: Router) { }


  onSubmit(addteacher: NgForm) {
    this.teacher.createTeacher(addteacher.value).subscribe((data) => {
      this.snackbar.open('New teacher Created', '', { duration: 1000 })
      this.router.navigate(['admin-dashboard']);
    });
  }



  ngOnInit(): void {

  }

}
