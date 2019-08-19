import { Injectable } from '@angular/core';
import { Book } from '../book';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

/*
@author: rohit
Service class access data from json file
*/
@Injectable({
  providedIn: 'root'
})
export class BookService {

  url: string = '../assets/book.json';
  books: Book[];
  status: string;
  index: number; //for update functionality
  book: Book;
  constructor(private http: HttpClient) {
    this.getBooks();
   }
  getData(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url).pipe(retry(2), catchError(this.handleError));
  }
  handleError(error) {
    console.log(error);
    return throwError(error);
  }

  getBooks() {
    this.getData().subscribe((data: Book[]) => {
       this.books = data;
       console.log('Datas are ' + this.books);
    }, error => {alert('problem with service/url try again')});
  }
  getAllBooks() {
    return this.books;
  }
  /* Adding Books to the Book List */
  addBook(book: Book) {
    this.books.push(book);
    return true;
  }
  /* for deleting an existing record*/
  deleteBook(i: number): void {
    this.books.splice(i, 1);
  }
  setIndex(i) {
    this.index = i;
  } //setting the index for update functionality
  getIndex() {
   return this.index;
 } //returns index to update an existing record
  getBook(i) {
   return this.books[i];
  }
  update(book) {
    this.books[this.books.indexOf[book]] = book;
  }
}


