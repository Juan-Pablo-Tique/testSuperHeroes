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
