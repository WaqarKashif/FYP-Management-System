import { HttpHeaders, } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'token ' + sessionStorage.getItem('TOKEN_KEY')
  })
};


export const environment = {
  
  apiUrl: 'http://127.0.0.1:8000',
  httpOptions: httpOptions,
  production: false
};