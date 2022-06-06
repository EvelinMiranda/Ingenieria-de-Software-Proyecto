import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pesonal',
  templateUrl: './pesonal.page.html',
  styleUrls: ['./pesonal.page.scss'],
})
export class PesonalPage implements OnInit {

  constructor(private router:Router) { }
  verPersonal(){
    this.router.navigate(["lista-empleados"]);
  }

  ngOnInit() {
  }

}
