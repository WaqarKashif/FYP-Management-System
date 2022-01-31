import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherService } from 'src/app/Services/Teacher/teacher.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluate-projects',
  templateUrl: './evaluate-projects.component.html',
  styleUrls: ['./evaluate-projects.component.scss']
})
export class EvaluateProjectsComponent implements OnInit {

  constructor( private teacher:TeacherService, private router: Router) { }

  displayedColumns: any[] = ["number","project_name","description","evaluate"];
  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading = true;



    // Get all the users from user service
  fetchAllProjects() {
    return this.teacher.getAllProjects().subscribe(
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
    this.router.navigate(['/', 'evaluate', id]);
  }


  ngOnInit(): void {
    this.fetchAllProjects()
  }

}

