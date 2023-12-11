import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  standalone: true,
  styles: [
  ]
})
export class BookComponent{
  @Input() book = {title: '', author: '', location: '', url: ''}
}
