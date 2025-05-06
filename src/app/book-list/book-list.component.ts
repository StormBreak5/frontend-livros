import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-book-list',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

}
