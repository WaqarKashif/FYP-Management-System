import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { TeacherService } from 'src/app/Services/Teacher/teacher.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {

  constructor(private teacher:TeacherService, private authService:AuthServiceService) { }

  teacherID = this.authService.userid
  projectCount:any


  fetchAllProjects(id:any) {
    return this.teacher.getTeacherProjects(id).subscribe(
      (res: any) => {
      this.projectCount = res.length
        
      }
    );
  }

  ngOnInit(): void {
    this.fetchAllProjects(this.teacherID)
  }

}
