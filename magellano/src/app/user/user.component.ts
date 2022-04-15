import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { UserService } from '../user.service';  
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSaved:      boolean = false;  
  userForm:       any;  
  allUsers:       Observable<User[]>;  
  userIdUpdate  = null;  
  massage       = null; 
  filteredString: string='';
  newWin:         Window;
  name:           string;

  constructor(private formbulider: FormBuilder, private userService:UserService, private router: Router) 
  { 
    this.name = localStorage.getItem('name');
  }

  ngOnInit(){
    this.userForm = this.formbulider.group({  
      Nome: ['', [Validators.required]],  
      Cognome: ['', [Validators.required]],  
      Matricola: ['', []],  
      Account: ['', []], 
      Telefono: ['', []], 
      Email: ['', [Validators.email]], 
      Cellulare: ['', []],
    });  
    this.loadAllUsers();
  }

  loadAllUsers() {  
    this.allUsers = this.userService.getAllUser();  
  }  
  onFormSubmit() {  
    this.dataSaved = false;  
    const user = this.userForm.value;  
    this.createUser(user);  
    this.userForm.reset();  
  }  
  loadUserToEdit(userId: string) {  
    this.userService.getUserById(userId).subscribe(user=> {  
      this.massage = null;  
      this.dataSaved = false;  
      this.userIdUpdate = user.ID;
      this.userForm.controls['Nome'].setValue(user.Nome);  
      this.userForm.controls['Cognome'].setValue(user.Cognome);  
      this.userForm.controls['Matricola'].setValue(user.Matricola);  
      this.userForm.controls['Account'].setValue(user.Account); 
      this.userForm.controls['Telefono'].setValue(user.Telefono); 
      this.userForm.controls['Email'].setValue(user.Email); 
      this.userForm.controls['Cellulare'].setValue(user.Cellulare); 
    });  
  
  }  
  createUser(user: User) {  
    if (this.userIdUpdate == null) {  
      this.userService.insertUser(user).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record Salvato con Successo';  
          this.loadAllUsers();  
          this.userIdUpdate = null;  
          this.userForm.reset();  
        }  
      );  
    } else {  
      user.ID = this.userIdUpdate;  
      this.userService.updateUser(user).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Aggiornato con Successo';  
        this.loadAllUsers();  
        this.userIdUpdate = null;  
        this.userForm.reset();  
      });  
    }  
  }   
  deleteUser(userId: string) {  
    if (confirm("Sicuro di voler cancellare questo contatto?")) 
    {   
      console.log(userId);
      this.userService.deleteUserById(userId).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Cancellato con Successo';  
        this.loadAllUsers();  
        this.userIdUpdate = null;  
        this.userForm.reset();  
      });  
    }  
  }  
  resetForm() {  
    this.userForm.reset();  
    this.massage = null;  
    this.dataSaved = false; 
    this.userIdUpdate = null; 
  }  
  printComponent()
  {
    //window.print(); 
    var divToPrint = document.getElementById("UserTable");  
    this.newWin = window.open("");  
    this.newWin.document.write(divToPrint.outerHTML);  
    this.newWin.print();  
    this.newWin.close();
  }

  logout() {
    alert("Logout Effettuato!");
    localStorage.removeItem("name");
    this.router.navigate(['user']).then(() => {
      window.location.reload();
    });;
  }
}
