import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/Services/Teacher/teacher.service';

@Component({
  selector: 'app-teacher-meeting',
  templateUrl: './teacher-meeting.component.html',
  styleUrls: ['./teacher-meeting.component.scss']
})
export class TeacherMeetingComponent implements OnInit {

  constructor(private teacherService: TeacherService, private route: ActivatedRoute, private router:Router) {
    this.projectID = this.route.snapshot.paramMap.get('id');
  }

  projectID: any = null;

  ngOnInit(): void {
  }

  onSubmit(meetingform: NgForm) {
    let mainObject = meetingform.value;
    mainObject.project_id = this.projectID;
    this.teacherService.createMeeting(mainObject).subscribe(resp => {
      this.router.navigate(['/','teacher-dashboard'])
      console.log(resp);
    });
  }

}
