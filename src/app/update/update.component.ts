import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  books: Book = {id: 0, name: ' ', cost: 0, author: ''};
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.books = this.bookService.getBook(this.bookService.getIndex());
  }
  /*The navigate() used in update() is used to direct the flow to the Home(for this case 'list') page after 
  updation */
  update() {
    this.bookService.update(this.books);
    this.router.navigate(['list']);
  }

}
