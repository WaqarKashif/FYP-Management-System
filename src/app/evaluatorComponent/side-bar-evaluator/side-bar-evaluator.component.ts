import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-side-bar-evaluator',
  templateUrl: './side-bar-evaluator.component.html',
  styleUrls: ['./side-bar-evaluator.component.scss']
})
export class SideBarEvaluatorComponent implements OnInit {

  constructor(public authService:AuthServiceService) { }

  ngOnInit(): void {
  }

}
