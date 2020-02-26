import { Pipe } from '@angular/core';
import { ResultItem } from '../../youtube/models/result-item.model';

@Pipe ({
  name: 'filterPipe'
})

export class FilterPipe {

  public transform(cards: ResultItem[], search: string = ''): ResultItem[] {
    if (!search.trim()) {
      return cards;
    }

    return cards.filter(card => {
      return card.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }

}
