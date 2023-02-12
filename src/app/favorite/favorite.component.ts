import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input() favorite!: boolean;
  @Output() change = new EventEmitter();
  click(){
        this.favorite = !this.favorite;
        this.change.emit(this.favorite)
  }
}
