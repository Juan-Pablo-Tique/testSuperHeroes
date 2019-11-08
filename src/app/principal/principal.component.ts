import { Component, OnInit, NgZone } from '@angular/core';
import { JsonHeroService } from '../services/json-hero.service';
import { Observable } from 'rxjs';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  public itemsHeroes: any;
  public filterHero: string;
  public img: number;
  closeResult: string;
  // tslint:disable-next-line: ban-types
  itemHeroSelect: Observable <Object>;
  constructor(private heroes: JsonHeroService, private ngZone: NgZone, private modalService: NgbModal) {
   }

  setListHeroes() {
    this.img = window.innerWidth;
    window.onresize = (e) => {
        this.ngZone.run(() => {
          this.img = window.innerWidth;
          console.log('size: ' + this.img);
        });
    };

    this.itemsHeroes = this.heroes.getSuperHeroes();
  }

  // setHero(hero){
  //   let listHeroes: Observable<any>;
  //   const routes = '/id.json' + hero;
  //   listHeroes = this.heroes.getSuperHeroes(routes);
  //   listHeroes.subscribe(resultHeroes => {
  //     this.itemsHeroes = resultHeroes;
  //   });
  // }

  // setPowerStats(){
  //   let listHeroes: Observable<any>;
  //   const routes = '/powerstats.json';
  //   listHeroes = this.heroes.getSuperHeroes(routes);
  //   listHeroes.subscribe(resultHeroes =>{
  //     this.itemsHeroes = resultHeroes;
  //   });
  // }

  // setAppearance(){
  //   let listHeroes: Observable<any>;
  //   const routes = '/appearance.json';
  //   listHeroes = this.heroes.getSuperHeroes(routes);
  //   listHeroes.subscribe(resultHeroes =>{
  //     this.itemsHeroes = resultHeroes;
  //   });
  // }

  // setBiography(){
  //   let listHeroes: Observable<any>;
  //   const routes = '/biography.json';
  //   listHeroes = this.heroes.getSuperHeroes(routes);
  //   listHeroes.subscribe(resultHeroes =>{
  //     this.itemsHeroes = resultHeroes;
  //   });
  // }

  // setConnections(){
  //   let listHeroes: Observable<any>;
  //   const routes = '/connections.json';
  //   listHeroes = this.heroes.getSuperHeroes(routes);
  //   listHeroes.subscribe(resultHeroes =>{
  //     this.itemsHeroes = resultHeroes;
  //   });
  // }

  // setWork() {
  //   let listHeroes: Observable<any>;
  //   const routes = '/work.json';
  //   listHeroes = this.heroes.getSuperHeroes(routes);
  //   listHeroes.subscribe(resultHeroes =>{
  //     this.itemsHeroes = resultHeroes;
  //   });
  // }
    selectHero(idHero) {
      this.itemHeroSelect = this.heroes.getHero(idHero);
      console.log('un hero ' + this.itemHeroSelect);
    }

    selectHero2() {
      console.log('un hero ');
    }

    open(content) {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

  ngOnInit() {
    this.setListHeroes();
  }

}
