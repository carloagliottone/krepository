//import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';
import { filter } from 'rxjs';
import { Observable } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Observable<any[]>, filterString: string) {
    return value.pipe(map(items => items.filter(
      item => item.Cognome.toLowerCase().includes(filterString.toLowerCase()) || 
      item.Nome.toLowerCase().includes(filterString.toLowerCase())
      )));
  }
}