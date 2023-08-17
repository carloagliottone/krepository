import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Login } from './login';


@Injectable({
  providedIn: 'root'  //Utilizzabile in tutti i componenti
})
export class UserService {

  url = 'http://desktop002/WebApplicationMagellano/Api/User'
  //url = 'http://localhost:55353/Api/User'
  validLogin: string;

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/GetAllUser');
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(this.url + '/GetUserById/' + userId);
  }

  insertUser(user: User): Observable<User> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<User>(this.url + '/InsertUser/', user, httpOptions);
  }

  updateUser(user: User): Observable<User> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<User>(this.url + '/UpdateUser/', user, httpOptions);
  }

  deleteUserById(userId: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + '/DeleteUser/' + userId, httpOptions);
  }

  loginUser(login: Login): Observable<Login> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<Login>(this.url + '/LoginUser/', 
    login
    , httpOptions);
  }
}
