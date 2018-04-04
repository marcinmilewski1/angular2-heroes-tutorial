import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero/hero";
import {ActivatedRoute, Params} from '@angular/router';
import {HeroService} from "../hero/service/hero.service";

@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute) {
    }



    ngOnInit() :void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // + means convert to number
            this.heroService.getHero(id).then(hero => this.hero = hero);
            });
    }

    goBack(): void {
        window.history.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(this.goBack);
        console.log("Hero updated");
    }

}