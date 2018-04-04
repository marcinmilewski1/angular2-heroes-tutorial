import { Component } from '@angular/core';
import {Hero} from "../hero/hero";
import {HeroService} from "../hero/service/hero.service";
import { OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(){
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return}
    this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        })
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h.id !== hero.id);
          if(this.selectedHero === hero) {
            this.selectedHero = null;
          }
        });
  }
}
