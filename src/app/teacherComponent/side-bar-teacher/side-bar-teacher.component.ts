import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-side-bar-teacher',
  templateUrl: './side-bar-teacher.component.html',
  styleUrls: ['./side-bar-teacher.component.scss']
})
export class SideBarTeacherComponent implements OnInit {

  constructor( public authService:AuthServiceService) { }

  ngOnInit(): void {
  }

}
