import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private formbulider: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbulider.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  login() {
    const login = this.loginForm.value;
    //this.userService.loginUser(login).subscribe(this.callbackLogin);
    this.userService.loginUser(login).subscribe({
      next: (res) => {
        alert("Benvenuto Utente " + res.Username);
        localStorage.setItem("name", res.Username);
        this.router.navigate(['user']);
      },
      error: () => {
        alert("Username o Password errati");
        localStorage.removeItem("name");
      },
      complete: () => console.log("completato"),
    }
    );

    /*this.userService.loginUser(login).subscribe(
      res => {
        alert("Benvenuto Utente " + res.Username);
        localStorage.setItem("name", res.Username);
        this.router.navigate(['user']);
      },
      err => {
        alert("Username o Password errati");
        localStorage.removeItem("name");
      },
      () => console.log("completato"),
    );*/
    this.loginForm.reset();
  }
}
