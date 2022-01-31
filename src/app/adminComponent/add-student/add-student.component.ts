import { StudentService } from './../../Services/Student/student.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private student:StudentService, private snackbar: MatSnackBar, private router:Router ) { }


  onSubmit(addstudent: NgForm){
    this.student.createStudent(addstudent.value).subscribe((data) => {
      this.snackbar.open('New Student Created', '', {duration: 1000})
      this.router.navigate(['admin-dashboard']);
    });
  }



ngOnInit(): void {
}


}
