import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { StudentService } from 'src/app/Services/Student/student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private student:StudentService, private authService:AuthServiceService, private router: Router) { }


  studentID = this.authService.userid
  projectID = this.authService.projectID
  meetingCount:any
  groupmembers:any

  fetchAllGroupMembers(id:any) {
    return this.student.getGroupMembers(id).subscribe(
      (res: any) => {
      this.groupmembers = res.length
     
      }
    );
  }

  fetchMeeting(id:any) {
    return this.student.getMessageNotification(id).subscribe(
      (res: any) => {
        this.meetingCount = res.length;
       
      }
    );
  }





  ngOnInit(): void {
    this.fetchAllGroupMembers(this.studentID)
    this.fetchMeeting(this.projectID)
  }

}
