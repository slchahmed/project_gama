import { Component, Input } from '@angular/core';

@Component({
  selector: 'zipy',
  templateUrl: './zipy.component.html',
  styleUrls: ['./zipy.component.css']
})
export class ZipyComponent {
  @Input() title!:string;
  istogled:boolean=true;

  togle(){
    this.istogled = !this.istogled
  }

}
