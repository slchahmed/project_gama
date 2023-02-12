import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { AuthorService } from '../author.service';
@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  authors;
  email = "hello@gmail.com";
  constructor(service: AuthorService) {
   
    this.authors = service.getAuthors();
  }
  click(){
    console.log(this.email)
  }

}
