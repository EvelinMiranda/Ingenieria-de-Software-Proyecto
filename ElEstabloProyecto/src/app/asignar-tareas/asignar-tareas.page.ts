import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignar-tareas',
  templateUrl: './asignar-tareas.page.html',
  styleUrls: ['./asignar-tareas.page.scss'],
})
export class AsignarTareasPage implements OnInit {

  constructor(private router:Router) { }
  ver(){
    this.router.navigate(["tarea-asignada-admin"]);

  }

  ngOnInit() {
  }

}
