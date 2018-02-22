import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
            //accesible solo en este componente
            //_nombreAliasServicio    tipo
heroes:Heroe[] = [];


  constructor( private _heroesService:HeroesService,
                private router:Router
  ) {

      // console.log("constructor");
  }

  ngOnInit() {
    this.heroes =this._heroesService.getHeroes();

    // console.log(this.heroes);
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
