import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(itemsHeroes: any, filterHero: string) {
    if (!itemsHeroes || !filterHero) {
      return itemsHeroes;
    }

    return itemsHeroes.filter( itemHero =>
      itemHero.slug.toLowerCase().indexOf(filterHero.toLocaleLowerCase()) !== -1);
  }

}
