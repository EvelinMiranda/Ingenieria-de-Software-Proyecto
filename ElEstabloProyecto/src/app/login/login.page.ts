import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }
  recordarContrasena(){
    this.router.navigate(["recuperar-contrasena"]);
  }

  registrarse(){
    this.router.navigate(["registro"]);
  }

  dashboard(){
    this.router.navigate(["dashboard"]);
  }

  ngOnInit() {
  }

}
