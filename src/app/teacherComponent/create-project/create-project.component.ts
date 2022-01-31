import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { TeacherService } from 'src/app/Services/Teacher/teacher.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  constructor(private teacher:TeacherService,private authService:AuthServiceService, private snackbar: MatSnackBar, private router:Router) { }

  teacherID = this.authService.userid
  project_name:any ='';
  description:any = '';

  onSubmit(createProject: NgForm){
    let mainObject = createProject.value
    mainObject.teacher = this.authService.userid
    this.teacher.createProject(createProject.value).subscribe((data) => {
      this.snackbar.open('New Project Created', '', {duration: 1000})
      this.router.navigate(['teacher-dashboard']);
    });
  }


  ngOnInit(): void {
  }



}
