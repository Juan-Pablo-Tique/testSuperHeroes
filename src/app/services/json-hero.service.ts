import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonHeroService {
  public arrayHeroes: any = [];
  public arrayHeroes2: Observable<any[]>;

  constructor(private http: HttpClient) { }
  public url = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api';

  getSuperHeroes() {
    return this.http.get(this.url + '/all.json');
  }

  getHero(idHero) {
    this.http.get(this.url + '/all.json').subscribe
     ((res: Array<string>) => {
      if (!res) {
        console.log('vacio el json');
        return;
      }

      const data = [];
      let i = 0 ;

      // tslint:disable-next-line: only-arrow-functions
      Object.keys(res).forEach(function(key) {
        data[i] = (res[key]);
        i++;
      });
      const random = [];
      for (let iterador = 0; iterador < 20; iterador++) {
          random [iterador] = Math.floor(Math.random() * ((data.length + 1) - 1)) + 1;
          this.arrayHeroes [iterador] = this.http.get(this.url + '/id/' + random[iterador] + '.json');
        }
      return this.arrayHeroes2 = of(this.arrayHeroes);
      });
  }
}
