import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { InterestService } from './../../Services/interest.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/Student/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';







@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  constructor(private student:StudentService, private interest:InterestService, private authService:AuthServiceService,  private snackbar: MatSnackBar, private router:Router) { }

  student_interest:any
  interestList:any[]=[]

  student_name:any = ''
  email:any = ''
  phone:any = ''
  address:any = ''
  studentID = this.authService.userid




  fetchAllInterests() {
    return this.interest.getInterest().subscribe(
      (res: any) => {
        this.interestList= res
        console.log(this.interestList)
      
   
    })
  }


  fetchSingleStudent(id:any) {
    return this.student.getSingleStudent(id).subscribe(
      (res: any) => {
      this.student_name = res.student_name
      this.student_interest= res.student_interest
      this.email = res.email
      this.address = res.address
      this.phone = res.phone
   
    })
  }

  onSubmit(editstudent: NgForm){
    let mainObject = editstudent.value
    mainObject.id = this.authService.userid
    this.student.updateStudent(mainObject).subscribe((data) => {
      this.snackbar.open('You have updated your profile', '', {duration: 1000})
      this.router.navigate(['student-dashboard']);
    });
  }

  ngOnInit(): void {
    this.fetchAllInterests()
    this.fetchSingleStudent(this.studentID)
  }










}
