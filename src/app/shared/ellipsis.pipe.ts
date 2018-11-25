import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let teaser = '';
    let more = '';
    if (value.length > 200) {
      teaser = value.substr(0, 200);
      more = value.substr(200);
      return `${teaser}<span class="readmore ellipsis"><i>...</i><a class="showmore">read more</a><span class="more"> ${more}
      </span><a class="showless">show less</a></span>`;
    }
    return value;
  }

}
