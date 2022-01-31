import { TeacherMeetingComponent } from './teacherComponent/teacher-meeting/teacher-meeting.component';
import { EvaluateProjectsComponent } from './evaluatorComponent/evaluate-projects/evaluate-projects.component';
import { ProjectAllComponent } from './adminComponent/project-all/project-all.component';
import { MyProjectComponent } from './teacherComponent/my-project/my-project.component';
import { SelectProjectComponent } from './components/select-project/select-project.component';
import { CreateProjectComponent } from './teacherComponent/create-project/create-project.component';
import { ViewEvaluatorComponent } from './adminComponent/view-evaluator/view-evaluator.component';
import { AdminDashboardComponent } from './adminComponent/admin-dashboard/admin-dashboard.component';
import { AddTeacherComponent } from './adminComponent/add-teacher/add-teacher.component';
import { AddStudentComponent } from './adminComponent/add-student/add-student.component';
import { AdminLoginComponent } from './adminComponent/admin-login/admin-login.component';
import { ChooseInterestComponent } from './components/choose-interest/choose-interest.component';
import { GroupsUnderMeComponent } from './teacherComponent/groups-under-me/groups-under-me.component';
import { GroupDetailTeacherComponent } from './teacherComponent/group-detail-teacher/group-detail-teacher.component';
import { EditTeacherComponent } from './teacherComponent/edit-teacher/edit-teacher.component';
import { TeacherLoginComponent } from './teacherComponent/teacher-login/teacher-login.component';
import { SelectUserComponent } from './components/select-user/select-user.component';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacherComponent/teacher-dashboard/teacher-dashboard.component';
import { EvaluatorLoginComponent } from './evaluatorComponent/evaluator-login/evaluator-login.component';
import { EvaluatorDashboardComponent } from './evaluatorComponent/evaluator-dashboard/evaluator-dashboard.component';
import { EditEvaluatorComponent } from './evaluatorComponent/edit-evaluator/edit-evaluator.component';
import { AddEvaluatorComponent } from './adminComponent/add-evaluator/add-evaluator.component';
import { EvaluateComponent } from './evaluatorComponent/evaluate/evaluate.component';
import { ViewStudentComponent } from './adminComponent/view-student/view-student.component';
import { ViewTeacherComponent } from './adminComponent/view-teacher/view-teacher.component';


const routes: Routes = [
  {path:'',component:SelectUserComponent},
  {path:'student-login', component: LoginComponent},
  {path:'student-dashboard',component:StudentDashboardComponent},
  {path:'edit-student',component: EditStudentComponent},
  {path:'view-group',component: GroupDetailsComponent},
  {path:'choose-interest',component: ChooseInterestComponent},
  {path:'select-project',component:SelectProjectComponent},

  // Teacher Paths
  {path:'teacher-login',component:TeacherLoginComponent},
  {path:'edit-teacher',component: EditTeacherComponent},
  {path:'groups-under-me',component:GroupsUnderMeComponent},
  {path:'group-under-teacher',component:GroupDetailTeacherComponent},
  {path:'teacher-dashboard',component:TeacherDashboardComponent},
  {path:'create-project',component:CreateProjectComponent},
  {path:'my-project',component:MyProjectComponent},
  {path:'create-meeting/:id',component:TeacherMeetingComponent},

  // Evaluator Paths
  {path:'evaluator-login',component: EvaluatorLoginComponent},
  {path:'evaluator-dashboard',component:EvaluatorDashboardComponent},
  {path:'edit-evaluator',component: EditEvaluatorComponent},
  {path:'evaluate-project', component:EvaluateProjectsComponent},
  {path:'evaluate/:id', component:EvaluateComponent},
  
  // Admin Paths
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'add-evaluator',component:AddEvaluatorComponent},
  {path:'add-teacher', component:AddTeacherComponent},
  {path:'view-student',component:ViewStudentComponent},
  {path:'view-teacher',component:ViewTeacherComponent},
  {path:'view-evaluator', component:ViewEvaluatorComponent},
  {path:'all-project',component:ProjectAllComponent},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
