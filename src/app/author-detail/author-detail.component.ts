import { Component } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent {
   author:any;
  constructor(author:AuthorService){
      this.author=author.getAuthors();
  }
}
