import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';;





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { SelectUserComponent } from './components/select-user/select-user.component';
import { TeacherLoginComponent } from './teacherComponent/teacher-login/teacher-login.component';
import { EditTeacherComponent } from './teacherComponent/edit-teacher/edit-teacher.component';

import { SideBarTeacherComponent } from './teacherComponent/side-bar-teacher/side-bar-teacher.component';
import { NavBarTeacherComponent } from './teacherComponent/nav-bar-teacher/nav-bar-teacher.component';
import { GroupsUnderMeComponent } from './teacherComponent/groups-under-me/groups-under-me.component';
import { GroupDetailTeacherComponent } from './teacherComponent/group-detail-teacher/group-detail-teacher.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ChooseInterestComponent } from './components/choose-interest/choose-interest.component';
import { TeacherDashboardComponent } from './teacherComponent/teacher-dashboard/teacher-dashboard.component';
import { NavBarEvaluatorComponent } from './evaluatorComponent/nav-bar-evaluator/nav-bar-evaluator.component';
import { SideBarEvaluatorComponent } from './evaluatorComponent/side-bar-evaluator/side-bar-evaluator.component';
import { EvaluatorLoginComponent } from './evaluatorComponent/evaluator-login/evaluator-login.component';
import { EvaluatorDashboardComponent } from './evaluatorComponent/evaluator-dashboard/evaluator-dashboard.component';
import { EditEvaluatorComponent } from './evaluatorComponent/edit-evaluator/edit-evaluator.component';
import { EvaluateComponent } from './evaluatorComponent/evaluate/evaluate.component';
import { AdminLoginComponent } from './adminComponent/admin-login/admin-login.component';
import { AdminNavbarComponent } from './adminComponent/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './adminComponent/admin-sidebar/admin-sidebar.component';
import { AddStudentComponent } from './adminComponent/add-student/add-student.component';
import { ViewStudentComponent } from './adminComponent/view-student/view-student.component';
import { ViewTeacherComponent } from './adminComponent/view-teacher/view-teacher.component';
import { ViewEvaluatorComponent } from './adminComponent/view-evaluator/view-evaluator.component';
import { AddTeacherComponent } from './adminComponent/add-teacher/add-teacher.component';
import { AddEvaluatorComponent } from './adminComponent/add-evaluator/add-evaluator.component';
import { AdminDashboardComponent } from './adminComponent/admin-dashboard/admin-dashboard.component';
import { CreateProjectComponent } from './teacherComponent/create-project/create-project.component';
import { SelectProjectComponent } from './components/select-project/select-project.component';
import { MyProjectComponent } from './teacherComponent/my-project/my-project.component';
import { ProjectAllComponent } from './adminComponent/project-all/project-all.component';
import { EvaluateProjectsComponent } from './evaluatorComponent/evaluate-projects/evaluate-projects.component';
import { TeacherMeetingComponent } from './teacherComponent/teacher-meeting/teacher-meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    EditStudentComponent,
    NavbarComponent,
    GroupDetailsComponent,
    SelectUserComponent,
    TeacherLoginComponent,
    EditTeacherComponent,
   
    SideBarTeacherComponent,
    NavBarTeacherComponent,
    GroupsUnderMeComponent,
    GroupDetailTeacherComponent,
    StudentDashboardComponent,
    ChooseInterestComponent,
    TeacherDashboardComponent,
    NavBarEvaluatorComponent,
    SideBarEvaluatorComponent,
    EvaluatorLoginComponent,
    EvaluatorDashboardComponent,
    EditEvaluatorComponent,
    EvaluateComponent,
    AdminLoginComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AddStudentComponent,
    ViewStudentComponent,
    ViewTeacherComponent,
    ViewEvaluatorComponent,
    AddTeacherComponent,
    AddEvaluatorComponent,
    AdminDashboardComponent,
    CreateProjectComponent,
    SelectProjectComponent,
    MyProjectComponent,
    ProjectAllComponent,
    EvaluateProjectsComponent,
    TeacherMeetingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatSortModule,
    HttpClientModule,
    MatDialogModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
