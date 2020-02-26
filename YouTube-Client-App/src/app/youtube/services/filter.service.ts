import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FilterService {

  private word: string = '';

  @Output() public filterWord: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public setFilterWord(value: string): void {
    this.word = value;
    this.filterWord.emit(this.word);
  }

}
