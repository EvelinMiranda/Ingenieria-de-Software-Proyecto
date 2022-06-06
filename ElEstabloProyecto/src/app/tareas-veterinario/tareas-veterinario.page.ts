import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas-veterinario',
  templateUrl: './tareas-veterinario.page.html',
  styleUrls: ['./tareas-veterinario.page.scss'],
})
export class TareasVeterinarioPage implements OnInit {

  constructor(private router:Router) { }
  reproduccion(){
    this.router.navigate(["reproduccion"]);
  }
  medico(){
    this.router.navigate(["medico"]);
  }
  vacuna(){
    this.router.navigate(["vacuna"]);
  }

  ngOnInit() {
  }

}
