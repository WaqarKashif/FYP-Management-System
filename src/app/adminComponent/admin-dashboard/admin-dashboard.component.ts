import { Component, OnInit } from '@angular/core';
import { AdminStudentService } from 'src/app/Services/Admin/admin-student.service';
import { EvaluatorAdminService } from 'src/app/Services/Admin/evaluator-admin.service';
import { TeacherAdminService } from 'src/app/Services/Admin/teacher-admin.service';
import { TeacherService } from 'src/app/Services/Teacher/teacher.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private student:AdminStudentService,private teacher:TeacherAdminService ,private evaluator:EvaluatorAdminService, private projectcount:TeacherService) { }

  totalEvaluators:any
  totalTeachers:any
  totalStudents:any
  totalProjects:any


  fetchAllEvaluator() {
    return this.evaluator.getEvaluator().subscribe(
      (res: any) => {
        this.totalEvaluators = res.length
   
    })
  }

  fetchAllStudent() {
    return this.student.getStudent().subscribe(
      (res: any) => {
        this.totalStudents = res.length
      
   
    })
  }

  fetchAllTeacher() {
    return this.teacher.getTeacher().subscribe(
      (res: any) => {
        this.totalTeachers= res.length
      
   
    })
  }

  fetchAllProjects() {
    return this.projectcount.getAllProjects().subscribe(
      (res: any) => {
        this.totalProjects= res.length
      
   
    })
  }




  ngOnInit(): void {
    this.fetchAllTeacher()
    this.fetchAllStudent()
    this.fetchAllEvaluator()
    this.fetchAllProjects()
  }

}
