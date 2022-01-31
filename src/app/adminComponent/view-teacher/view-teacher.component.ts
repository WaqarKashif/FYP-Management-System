import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherAdminService } from 'src/app/Services/Admin/teacher-admin.service';


@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.scss']
})
export class ViewTeacherComponent implements OnInit {

  constructor(private teacher:TeacherAdminService ) { }

  displayedColumns: any[] = ["number","teacher_name","email","address","phone","created_at","updated_at","teacher_interest"];
  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading = true;




    // Get all the users from user service
  fetchAllTeachers() {
    return this.teacher.getTeacher().subscribe(
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
    this.fetchAllTeachers();
  }


}
