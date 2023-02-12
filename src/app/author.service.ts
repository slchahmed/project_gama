import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  getAuthors(){
    return [{name:"bla1",books:"bla12"},{name:"bla2",books:"bla22"},{name:"bla3",books:"bla32"}];
  }
}
