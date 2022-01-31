
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, FormArray, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { InterestService } from 'src/app/Services/interest.service';
import { TeacherService } from 'src/app/Services/Teacher/teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss']
})
export class EditTeacherComponent implements OnInit {

  constructor(private teacher:TeacherService, private interest:InterestService, private authService:AuthServiceService,  private snackbar: MatSnackBar, private router:Router ) { }

 
  teacher_interest:any
  interestList:any[]=[]

  teacher_name:any = ''
  email:any = ''
  phone:any = ''
  address:any = ''
  teacherID = this.authService.userid

  fetchAllInterests() {
    return this.interest.getInterest().subscribe(
      (res: any) => {
        this.interestList= res
        console.log(this.interestList)
      
   
    })
  }


  fetchSingleTeacher(id:any) {
    return this.teacher.getSingleTeacher(id).subscribe(
      (res: any) => {
      this.teacher_name = res.teacher_name
      this.teacher_interest= res.teacher_interest
      this.email = res.email
      this.address = res.address
      this.phone = res.phone
   
    })
  }

  onSubmit(editTeacherForm: NgForm){
    let mainObject = editTeacherForm.value
    mainObject.id = this.authService.userid
    this.teacher.updateTeacher(mainObject).subscribe((data) => {
      this.snackbar.open('You have updated your profile', '', {duration: 1000})
      this.router.navigate(['teacher-dashboard']);
    });
  }
  


  ngOnInit(): void {
    this.fetchAllInterests()
    this.fetchSingleTeacher(this.teacherID)
  }



}
