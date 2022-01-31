import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherService } from 'src/app/Services/Teacher/teacher.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.scss']
})
export class MyProjectComponent implements OnInit {

  constructor( private teacher:TeacherService, private authService:AuthServiceService, private router: Router) { }

  displayedColumns: any[] = ["number","project_name","description", "meeting"];
  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading = true;
  teacherID = this.authService.userid


    // Get all the users from user service
  fetchAllProjects(id:any) {
    return this.teacher.getTeacherProjects(id).subscribe(
      (res: any) => {
      
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => (this.isLoading = false)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  onClick(id:any){
    this.router.navigate(['/', 'create-meeting', id])
  }


  ngOnInit(): void {
    this.fetchAllProjects(this.teacherID)
  }

}

