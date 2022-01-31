import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminStudentService } from 'src/app/Services/Admin/admin-student.service';


@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

 
  constructor(private student:AdminStudentService ) { }

  displayedColumns: any[] = ["number","student_name","email","address","phone","created_at","updated_at","student_interest"];
  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading = true;




    // Get all the users from user service
  fetchAllStudents() {
    return this.student.getStudent().subscribe(
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

  ngOnInit() {
    this.fetchAllStudents();
  }

}
