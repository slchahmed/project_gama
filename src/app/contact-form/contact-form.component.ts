import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  @Input() title = 'hello' ;

  console(ngmod:any){
    console.log(ngmod)
  }
}
