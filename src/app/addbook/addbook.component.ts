import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  book: Book = {id: 0, name: ' ', cost: 0, author: ''};
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }
  /*This function(add()) is called from addbook.component.html to add a record to the book list */
  add() {
    this.bookService.addBook(this.book);
    alert('Book added successfully');
    this.router.navigate(['list']);
    }

}
