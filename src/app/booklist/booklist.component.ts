import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.books = this.bookService.getAllBooks();
  }
  delete(i: number) {
    if (confirm('Are you sure you want to delete ?')) {
      this.bookService.deleteBook(i);
    }
}
update(i: number) {
  this.bookService.setIndex(i);
  this.router.navigate(['update']);
  }

}
