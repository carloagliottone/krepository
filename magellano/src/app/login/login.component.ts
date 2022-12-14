import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private formbulider: UntypedFormBuilder, private userService: UserService, private router: Router) { }

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
      error: (res) => {
        console.log(res);
        alert("Username o Password errati");
        localStorage.removeItem("name");
      },
      complete: () => console.log("completato"),
    }
    );
    this.loginForm.reset();
  }
}
