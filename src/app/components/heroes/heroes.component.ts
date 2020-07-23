import { Component, OnInit } from '@angular/core';
import { HeroesService, HeroeData } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: HeroeData [] = [];

  constructor( private _heroesService:HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);

  }

  verHeroe(idx: number){
    this.router.navigate(['/heroe', idx]);
  }

}


