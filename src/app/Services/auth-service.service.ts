import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

  // Authenticates the user and checks the user roles on which he/she has access of the functionalities
  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticatedUser = true;
      this.authToken = token;
      

      this.httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Token ' + this.authToken,
        }),
      };
    }
    const id =localStorage.getItem('userid');
    if(id){
      this.userid = id;

    }
    const interest = localStorage.getItem('interest')
    if(interest){
      this.userInterest = interest
    }
    const projectID = localStorage.getItem('projectID')
    if(projectID){
      this.projectID = projectID
    }
   
  }

  authToken = '';
  userid = '';
  userInterest = '';
  projectID: any = null;


  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Token ' + this.authToken,
    }),
  };

// default permissions set before the user logins 
  isAuthenticatedUser = false;



  // When User is loging in his/her details are sent to the local storage for acces purpose
  login(userData: any) {
    this.isAuthenticatedUser = true;
    this.authToken = userData.token;
    this.userid = userData.id
    this.userInterest = userData.interest
    if(userData.project_id) {
      this.projectID = userData.project_id;
      localStorage.setItem('projectID',this.projectID);
    }
    localStorage.setItem('token', this.authToken);
    localStorage.setItem('userid', this.userid);
    localStorage.setItem('interest',this.userInterest);
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + this.authToken,
      }),
    };
  }

  // Clears the data which was prevously set in the localstorage and logs the user out
  logout() {
    this.isAuthenticatedUser = false;
    this.authToken = '';
    this.userid = '';
    this.userInterest = '';
    this.projectID = null;
    localStorage.removeItem('userid');
    localStorage.removeItem('interest')
    localStorage.removeItem('token');
    localStorage.removeItem('projectID');
    this.router.navigate(["/"])
  }

  ngOnInit() {
    this.authToken;
  }
}
