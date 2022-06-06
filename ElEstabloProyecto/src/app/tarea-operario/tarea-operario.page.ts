import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarea-operario',
  templateUrl: './tarea-operario.page.html',
  styleUrls: ['./tarea-operario.page.scss'],
})
export class TareaOperarioPage implements OnInit {

  constructor(private router:Router) { }
  produccion(){
    this.router.navigate(["produccion"]);
  }
  mantenimiento(){
    this.router.navigate(["mantenimiento"]);
  }

  ngOnInit() {
  }
 

}
